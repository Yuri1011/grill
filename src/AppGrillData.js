import "./AppGrillData.css";
import { ExtraFoodData } from "./components/ExtraFoodData/ExtraFoodData";
import { Grill } from "./components/Grill/Grill";

function AppGrillData() {
  const data = {
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
  };

  return (
    <div className="appBlock">
      <Grill width={data.grill.width} height={data.grill.height} />
      <ExtraFoodData
        title={data.grill.grillItems.map((elem) => elem.title)}
        width={data.grill.grillItems.map((elem) => elem.width)}
        height={data.grill.grillItems.map((elem) => elem.height)}
      />
    </div>
  );
}

export default AppGrillData;
