import React from "react";
import { ExtraFoodTabl } from "../ExtraFoodTabl/ExtraFoodTabl";

export function ExtraFoodData(props) {
  const foodData = props.foodData.map((elem) => {
    return { title: elem.title, width: elem.width, height: elem.height };
  });

  return <ExtraFoodTabl foodData={foodData} />;
}
