import React from "react";
import PropTypes from "prop-types";

function SellButton(props){
  return(
    <div>
      <button className="buttonStyle" onClick={()=> props.onHandlePints(props.kegId)}>Sell a Pint!</button>
        <style jsx> {`
          .buttonStyle{
            font-size: 20px;
            width: 130px;
            height: 40px;
            margin-left: 130px;
          }
      `}</style>
    </div>
  );
}

export default SellButton;
