import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <div>
      <h3>{props.name} - {props.type}</h3>
      <p>{props.price} - {props.pints}</p>
      <p>{props.abv}</p>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.string,
  pints: PropTypes.string,
  abv: PropTypes.string
};

export default Keg;
