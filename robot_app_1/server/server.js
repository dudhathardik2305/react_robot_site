const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('./db');
const path = require('path');

const app = express();
const port = 5000;
const secretKey = 'your_secret_key';

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, secretKey, { expiresIn: '1h' });
};

app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const userCheck = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userCheck.rows.length > 0) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await pool.query('INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *', [email, hashedPassword]);
    const user = newUser.rows[0];

    const token = generateToken(user);
    res.status(201).json({ user: { id: user.id, email: user.email }, token, message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const userCheck = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userCheck.rows.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = userCheck.rows[0];
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user);
    res.status(200).json({ user: { id: user.id, email: user.email }, token, message: 'Logged in successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the Robotics Learning Project API!');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});