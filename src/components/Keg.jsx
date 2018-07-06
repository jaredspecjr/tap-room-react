import React from "react";
import PropTypes from "prop-types";

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
          <button onClick={props.onHandlePints} className="buttonStyle">Sell a Pint!</button>
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
          .buttonStyle{
            font-size: 20px;
            width: 130px;
            height: 40px;
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
  onHandlePints: PropTypes.func
};

export default Keg;
