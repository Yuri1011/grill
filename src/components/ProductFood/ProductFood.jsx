import React from "react";

export function ProductFood(props) {
  const products = props.grillItems;

  return products.map((elem) => {
    const styleProductFood = {
      display: "inline-block",
      width: elem.width,
      height: elem.height,
      backgroundColor: "green",
      margin: "1px",
      borderRadius: "5px",
      textAlign: "center",
    };

    return <div style={styleProductFood}></div>;
  });
}
