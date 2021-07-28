import React from "react";
import "./ProductFood.css";

export function ProductFood(props) {
  return props.row.map((elem, index) => {
    return (
      <div
        key={index}
        id="productFood"
        className="productFood"
        style={{
          float: "left",
          width: elem.width,
          height: elem.height,
        }}
      ></div>
    );
  });
}
