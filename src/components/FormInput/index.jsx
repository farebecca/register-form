import React from "react";
import "./style.css";

export const FormInput = ({
  label,
  placeholder,
  inputType,
  value,
  handleChange
}) => {
  const handleInputChange = e => handleChange(e.target.value);
  return (
    <div className="form-input-container">
      <label className="input">{label}</label>
      <input
        value={value}
        type={inputType}
        placeholder={placeholder}
        onChange={handleInputChange}
      ></input>
    </div>
  );
};
