import React from "react";
import Keg from "./Keg";
import BrewLogo from "./BrewLogo";
import PropTypes from "prop-types";

var masterKegList = [
  {
    name: "Guinness",
    type: "Stout",
    price: "$5.00",
    abv: "3.8%"
  },
  {
    name: "Newcastle",
    type: "Ale",
    price: "$4.00",
    abv: "4.0%"
  },
  {
    name: "Yuengling",
    type: "Lager",
    price: "$2.50",
    abv: "2.5%"
  }
];

function KegList(props){

  return (
    <div>
      <BrewLogo/>
      {masterKegList.map((keg, index) =>
        <Keg name={keg.name}
          type={keg.type}
          price={keg.price}
          pints={props.pints}
          abv={keg.abv}
          onHandlePints={props.onHandlePints}
          key={index}/>

      )}
    </div>
  );
}

KegList.propTypes = {
  pints: PropTypes.number,
  onHandlePints: PropTypes.func
};

export default KegList;
