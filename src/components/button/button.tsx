import React, { ReactNode, MouseEventHandler } from "react";
import "./styles/button.css";

interface ButtonProps {
  children: ReactNode;
  type?: "primary" | "secondary";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "primary",
  onClick = () => {},
}) => {
  return (
    <button
      className={`btn ${type === "primary" ? "btn-primary" : "btn-secondary"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
