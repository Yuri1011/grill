import React from "react";

export function ProductFood(props) {
  const prod = props.products.map((product) => (
    <div
      key={Math.random() * product.count}
      style={{
        display: "inline-block",
        width: product.width,
        height: product.height,
        backgroundColor: "green",
        margin: "1px",
        borderRadius: "5px",
        textAlign: "center",
      }}
    ></div>
  ));

 

  return prod;
}
