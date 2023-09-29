import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <button
      {...props}
      className="bg-blue-500 text-white w-full mt-5 rounded-md px-4 py-2 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
    />
  );
};

export default Button;
