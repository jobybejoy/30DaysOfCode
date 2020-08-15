import React from "react";
import "./style.css";

function Grid(props) {
  const {
    gap,
    col_template,
    row_template,
    nofRows,
    nofCols,
    customStyles,
  } = props;

  return (
    <div
      className="grid"
      style={{
        display: "grid",
        gap: gap,
        gridTemplateColumns: col_template
          ? col_template
          : `repeat(${nofCols},1fr)`,
        gridTemplateRows: row_template
          ? row_template
          : `repeat(${nofRows},1fr)`,
        ...customStyles,
      }}
    >
      {props.children}
    </div>
  );
}

export function GridEl() {
  return (
    <div
      className="grid__test"
      style={{
        height: "100px",
        width: "100px",
        background: "var(--page-cta-focus-color)",
      }}
    ></div>
  );
}

export default Grid;
