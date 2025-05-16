# Robotics Learning Project - User Authentication

This project demonstrates user registration and login functionality using a React frontend and a Node.js/Express backend connected to a PostgreSQL database.

## Backend Setup

The backend server (in the `server` directory) handles user registration and login:

* Uses Express.js for routing.
* Connects to a PostgreSQL database using the `pg` library.
* Uses `bcrypt` for password hashing.
* Generates JWT tokens for authentication upon successful login/registration.

## Frontend Setup

The frontend (in the `src` directory) provides the user interface for registration and login:

* Built with React.js.
* Uses `axios` for making HTTP requests to the backend.
* Includes a `useAuth` hook for managing authentication state.
* Provides a `LoginPage` component for user login and registration forms.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd robot-app
    ```

3.  **Install frontend dependencies:**
    ```bash
    npm install
    ```

4.  **Navigate to the server directory:**
    ```bash
    cd server
    ```

5.  **Install backend dependencies:**
    ```bash
    npm install
    ```

6.  **Set up PostgreSQL:**
    * Create a PostgreSQL database named `robotics_app`.
    * Update the database credentials in `server/db.js`.
    * Create the `users` table with the following schema:
        ```sql
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL
        );
        ```

7.  **Start the backend server:**
    ```bash
    npm run dev
    ```
    (or `npm start` if you don't have nodemon)

8.  **Start the frontend development server:**
    ```bash
    cd ../
    npm start
    ```

Now you should have both the frontend and backend running, and you can test the user registration and login functionality.

**To create the zip file:**

1.  Create the file structure as shown above.
2.  Copy the content for each file into the corresponding file.
3.  Use your operating system's zip utility (as described in previous responses) to create a zip file of the `robot-app` directory.

I hope this helps you create the zip file you need! Let me know if you have any specific questions about any of these files or the setup process.