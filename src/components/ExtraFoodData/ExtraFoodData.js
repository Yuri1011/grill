import React from "react";
import { ExtraFood } from "../ExtraFood/ExtraFood";

export function ExtraFoodData(props) {
  const foodData = props.grillItems.map((elem) => {
    return { title: elem.title, width: elem.width, height: elem.height };
  });

  return <ExtraFood foodData={foodData} />;
}
