import React from "react";

export function ExtraFood(props) {
  const elements = props.foodData.map((elem) => (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <span style={{ marginLeft: "28px", width: "100px" }}>{elem.title}</span>
        <span style={{ marginLeft: "30px", width: "100px" }}>
          {elem.width}x{elem.height}
        </span>
      </div>
      <hr style={{ width: "220px" }} />
    </>
  ));

  return <>{elements}</>;
}
