import React from "react";
import "./style.css";

export function Label(props) {
  const { name, text } = props;
  return <label for={name}>{text}</label>;
}

export default function Input(props) {
  const { name, type, className, onChange } = props;

  return (
    <input
      type={type || "text"}
      className={className + " input"}
      {...props}
      onChange={onChange}
      name={name}
      id={name}
    />
  );
}

export function InputWithLabel(props) {
  const { name, label, placeholder, type, className, onChange } = props;
  return (
    <div className="form__group">
      <Label text={label} name={name} />
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
