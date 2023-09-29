import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="flex flex-col mb-3">
      <label className="text-sm">{label}</label>
      <input
        {...props}
        className="border-2 border-gray-300 rounded-md p-2 w-full"
      />
    </div>
  );
};

export default Input;
