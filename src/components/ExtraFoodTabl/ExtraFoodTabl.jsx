import React from "react";
import "./ExtraFoodTabl.css";
import { ExtraFoodData } from "../ExtraFoodData/ExtraFoodData";

export function ExtraFoodTabl(props) {
  return (
    <div>
      <p>items out of grill</p>
      <div className="extraFoodTabl">
        <div className="typeSize">
          <span className="type">Type</span>
          <span className="size">Size</span>
        </div>
        <hr className="strip" />
        <ExtraFoodData grillItems={props.grillItems} />
      </div>
    </div>
  );
}

