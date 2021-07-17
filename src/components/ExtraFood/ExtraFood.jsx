import React from "react";
import "./ExtraFood.css";

export function ExtraFood() {
  const food = [{ type: "steak", size: "50x30" }];

  return (
    <div>
      <p>items out of grill</p>
      <div className="extraFood">
        <div className="typeSize">
          <span>Type</span>
          <span>Size</span>
        </div>
        <hr className="strip" />
      </div>
    </div>
  );
}
