import React from "react";

export function Grill(props) {
  const styleGrill = {
    width: props.width,
    height: props.height,
    backgroundColor: "whiteSmoke",
    border: "1px solid silver",
    borderRadius: "5px",
  };

  return <div style={styleGrill}></div>;
}