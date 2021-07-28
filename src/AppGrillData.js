import "./AppGrillData.css";
import { ExtraFoodTabl } from "./components/ExtraFoodTabl/ExtraFoodTabl";
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
    <>
      <div className="appBlock">
        <Grill
          width={newData.grill.width}
          height={newData.grill.height}
          grillItems={newData.grill.grillItems}
        />
      </div>
    </>
  );
}

export default AppGrillData;
