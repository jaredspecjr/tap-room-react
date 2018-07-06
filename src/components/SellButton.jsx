import React from "react";
import PropTypes from "prop-types";

function SellButton(props){
  return(
    <div>
      <p onClick={()=> props.onHandlePints(props.kegId)}>Sell a Pint!</p>
    </div>
  );
}

export default SellButton;
