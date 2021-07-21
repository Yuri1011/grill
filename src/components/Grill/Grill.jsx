import React from "react";
import "./Grill.css";
import { ProductFood } from "../ProductFood/ProductFood";

export function Grill(props) {
  let firstLine = [];
  let afterfirstline = [];

  let grileWidth = props.width;
  let grileHeight = props.height;
  let sizeByName = new Map();
  let busyWidth = 0;
  let smallsize = grileHeight;

  console.log(busyWidth);

  props.grillItems.forEach((element) => {
    smallsize = element.height < smallsize ? element.height : smallsize;
    sizeByName.set(element.title, element.height);

    if (element.width + busyWidth < grileWidth) {
      firstLine.push(element);
      busyWidth += element.width;
    } else {
      afterfirstline.unshift(element);
    }
  });

  let amountOfBlocks = 0;

  afterfirstline.forEach((element) => {
    if (element.height !== smallsize) {
      amountOfBlocks = Math.floor(element.height / smallsize);
    }

    if (amountOfBlocks !== 0) {
      return;
    }
  });

  afterfirstline.forEach((element, index) => {
    if (index + 1 < amountOfBlocks) {
      firstLine.push(element);
      afterfirstline.shift(index);
    } else {
      return;
    }
  });

  return (
    <div
      id="grill"
      className="grill"
      style={{
        width: props.width,
        height: props.height,
      }}
    >
      <ProductFood grillItems={props.grillItems} firstLine={firstLine} />
    </div>
  );
}
