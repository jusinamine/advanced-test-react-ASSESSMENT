import React, { ChangeEvent } from "react";
import "./styles/select.css";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options?: Option[];
  placeholder?: string;
  onSelect?: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({
  options = [],
  placeholder = "",
  onSelect = () => {},
}) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onSelect(e.target.value);
  };

  return (
    <select
      onChange={handleChange}
      placeholder="Sort by"
      className="select-input"
      defaultValue={""}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options?.map((item) => (
        <option key={item?.value} value={item?.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
