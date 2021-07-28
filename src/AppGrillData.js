import "./AppGrillData.css";
import { Grill } from "./components/Grill/Grill";
import { useState } from "react";

function AppGrillData() {
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState({
    grill: {
      width: 500,
      height: 200,
      grillItems: [
        {
          width: 50,
          height: 30,
          count: 15,
          title: "Steak",
        },
        {
          width: 140,
          height: 140,
          count: 2,
          title: "Sausage",
        },
        {
          width: 130,
          height: 60,
          count: 4,
          title: "Tomato",
        },
        {
          width: 20,
          height: 10,
          count: 37,
          title: "Veal",
        },
      ],
    },
  });

  const updateValueText = (event) => {
    let obj;
    try {
      obj = JSON.parse(event.target.value);
      setData(obj);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Incorrect JSON format");
    }
  };

  if (data) {
    const newObj = JSON.stringify(data);
    const newData = JSON.parse(newObj);

    data.grill.grillItems.map((item) => {
      for (let i = 0; i < item.count - 1; i++) {
        newData.grill.grillItems.push(item);
      }
    });

    newData.grill.grillItems.sort((a, b) => {
      return b.height - a.height;
    });

    return (
      <Grill
        width={newData.grill.width}
        height={newData.grill.height}
        errorMessage={errorMessage}
        grillItems={newData.grill.grillItems}
        updateValueText={updateValueText}
      />
    );
  }
}

export default AppGrillData;
