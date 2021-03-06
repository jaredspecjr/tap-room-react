import React from "react";
import Keg from "./Keg";
import BrewLogo from "./BrewLogo";
import PropTypes from "prop-types";



function KegList(props){
  return (
    <div>
      <BrewLogo/>
      {props.masterKegList.masterKegList.map((keg, index) =>
        <Keg name={keg.name}
          type={keg.type}
          price={keg.price}
          pints={keg.pints}
          abv={keg.abv}
          onHandlePints={props.onHandlePints}
          key={index}
          kegId={keg.id}/>

      )}
    </div>
  );
}

KegList.propTypes = {
  pints: PropTypes.number,
  onHandlePints: PropTypes.func
};

export default KegList;
