import React from "react";
import "./ExtraFoodTabl.css";

export function ExtraFoodTabl(props) {
  return (
    <div>
      <p>items out of grill</p>
      <div className="extraFood">
        <div className="typeSize">
          <span className="type">Type</span>
          <span className="size">Size</span>
        </div>
        <hr className="strip" />
        <div className="dataFood">
          <span>title</span>
          <span>50x30</span>
        </div>
      </div>
    </div>
  );
}
