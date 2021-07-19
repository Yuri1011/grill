import React from "react";
import "./ProductFood.css";

export function ProductFood(props) {
  const products = props.grillItems;
console.log()
  return products.map((elem) => {
    return (
      <div
        className="productFood"
        style={{
          width: elem.width,
          height: elem.height,
        }}
      ></div>
    );
  });
}
