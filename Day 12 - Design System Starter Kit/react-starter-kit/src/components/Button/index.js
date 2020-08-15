import React from "react";
import "./style.css";

export default function Button(props) {
  return (
    <button type="button" className={props.className} {...props}>
      {props.children}
    </button>
  );
}
