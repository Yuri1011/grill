import React from "react";
import { ExtraFoodTabl } from "../ExtraFoodTabl/ExtraFoodTabl";

export function ExtraFoodData(props) {
  const foodData = [
    { title: props.title, width: props.width, height: props.height },
  ];
  return <ExtraFoodTabl foodData={foodData} />;
}
