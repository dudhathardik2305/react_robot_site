import React from 'react';
import classNames from 'classnames'; // Make sure classnames is installed

const Button = ({ children, className, variant = 'default', ...props }) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded px-4 py-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    default: 'bg-blue-600 hover:bg-blue-700 text-white',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
    ghost: 'text-blue-600 hover:bg-blue-50',
  };

  const combinedClassName = classNames(
    baseStyles,
    variants[variant] || variants.default,
    className
  );

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;