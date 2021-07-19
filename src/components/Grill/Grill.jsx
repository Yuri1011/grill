import React from "react";
import "./Grill.css";
import { ProductFood } from "../ProductFood/ProductFood";

export function Grill(props) {

  return (
    <div
      className="grill"
      style={{
        width: props.width,
        height: props.height,
      }}
    >
      <ProductFood grillItems={props.grillItems} />
    </div>
  );
}
