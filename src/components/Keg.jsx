import React from "react";
import PropTypes from "prop-types";
import SellButton from "./SellButton";

function Keg(props){
  return (
    <div className="listStyle">
      <div>
        <div className="padding">
          {props.name} --- {props.type}
        </div>
        <div className="padding">
          {props.price} Pints: {props.pints}
        </div>
        <div>
          ABV: {props.abv}
          <span className="buttonPosition"><SellButton onHandlePints={props.onHandlePints} kegId={props.kegId}/></span>
        </div>
      </div>
        <style jsx>{`
          .listStyle {
            width: 270px;
            font-size: 25px;
            font-family: comic;
            font-weight: bold;
            text-align: left;
            margin-bottom: 8px;
            border: thick ridge navy;
            padding-left: 10px;
          }
          .listStyle:nth-child(2){
            background-color: #28a745;
          }
          .listStyle:nth-child(3){
            background-color: #ffc107;
          }
          .listStyle:nth-child(4){
            background-color: #17a2b8;
          }
          .padding{
            padding-top: 5px;
            padding-bottom: 5px;
          }
      `}</style>
    </div>
  );
}


Keg.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.string,
  pints: PropTypes.number,
  abv: PropTypes.string,
};

export default Keg;
