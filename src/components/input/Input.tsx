import React, { ChangeEvent } from "react";
import "./styles/input.css";

interface InputProps {
  label: string;
  placeholder: string;
  onChange: (value: string) => void;
  value: string;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  onChange,
  value,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="input-box">
      <label>{label}</label>
      <input
        value={value}
        onChange={handleChange}
        className="input"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
