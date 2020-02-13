import React from "react";
import "./style.css";

export const FormInput = ({ label, placeholder, inputType }) => {
  return (
    <div className="form-input-container">
      <label className="input">{label}</label>
      <input type={inputType} placeholder={placeholder}></input>
    </div>
  );
};
