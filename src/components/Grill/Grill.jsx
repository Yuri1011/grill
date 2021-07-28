import React from "react";
import "./Grill.css";
import { collectItemsToDisplay } from "../collectItemsToDisplay/collectItemsToDisplay";
import { ProductFood } from "../ProductFood/ProductFood";
import { ExtraFoodTabl } from "../ExtraFoodTabl/ExtraFoodTabl";

export function Grill(props) {
  const t = `{
  "grill": {
    "width": 500,
    "height": 200,
    "grillItems": [{
      "width": 50,
      "height": 30,
      "count": 15,
      "title": "Steak"
    }, {
      "width": 140,
      "height": 140,
      "count": 2,
      "title": "Sausage"
    }, {
      "width": 130,
      "height": 60,
      "count": 4,
      "title": "Tomato"
    }, {
      "width": 20,
      "height": 10,
      "count": 37,
      "title": "Veal"
    }]
  }
}`;

  let data = collectItemsToDisplay(props);
  let secondIteration = {
    width: props.width,
    height: props.height,
    grillItems: data[1].items,
  };

  let data2 = collectItemsToDisplay(secondIteration);
  let dataInTable = data2[1].items;

  return (
    <div className="grillContainer">
      <div
        className="grillBlock"
        id="grill"
        className="grill"
        style={{
          width: props.width,
          height: props.height,
        }}
      >
        <div style={{ display: "block", height: data[0].busyHeight }}>
          <ProductFood row={data[0].items} />
        </div>

        <div style={{ display: "block", height: data2[0].busyHeight }}>
          <ProductFood row={data2[0].items} />
        </div>

        <div>
          <textarea
            className="textar"
            id="text"
            rows="27"
            cols="68"
            // value=""
            defaultValue={t}
            onChange={props.updateValueText}
          ></textarea>
        </div>
      </div>

      <ExtraFoodTabl grillItems={dataInTable} />
    </div>
  );
}
