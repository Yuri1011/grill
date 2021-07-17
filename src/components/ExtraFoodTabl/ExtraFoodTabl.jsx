import React from "react";
import { ExtraFood } from "../ExtraFood/ExtraFood";
import "./ExtraFoodTabl.css";

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

        <ExtraFood foodData={props.foodData} />
      </div>
    </div>
  );
}
