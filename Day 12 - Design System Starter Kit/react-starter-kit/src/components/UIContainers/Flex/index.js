import React from "react";
import "./style.css";

function Flex(props) {
  const { flexDirection, alignItems, justifyContent } = props;

  return (
    <div
      className="flex__container"
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: flexDirection || "column",
        alignItems: alignItems || "center",
        justifyContent: justifyContent || "center",
        boxSizing: "border-box",
      }}
    >
      {props.children}
    </div>
  );
}

export function FlexEl() {
  return (
    <div
      className="grid__test"
      style={{
        height: "100px",
        width: "100px",
        background: "var(--page-cta-focus-color)",
        margin: "16px",
      }}
    ></div>
  );
}

export default Flex;
