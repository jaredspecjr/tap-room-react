import React from "react";
import Keg from "./Keg";

var masterKegList = [
  {
    name: "Guinness",
    type: "Stout",
    price: "$5.00",
    pints: "124",
    abv: "3.8%"
  },
  {
    name: "Newcastle",
    type: "Ale",
    price: "$4.00",
    pints: "124",
    abv: "4.0%"
  },
  {
    name: "Yuengling",
    type: "Lager",
    price: "$2.50",
    pints: "124",
    abv: "2.5%"
  }
];

function KegList(){

  return (
    <div>
      {masterKegList.map((keg, index) =>
        <Keg name={keg.name}
          type={keg.type}
          price={keg.price}
          pints={keg.pints}
          abv={keg.abv}
          key={index}/>
      )}
    </div>
  );
}

export default KegList;
