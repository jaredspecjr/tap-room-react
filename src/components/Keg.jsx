import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <div className="listStyle">
      <div className="infoStyle">
        {props.name} --- {props.type}<br></br>{props.price} Pints: {props.pints}<br></br> ABV: {props.abv}
      </div>
      <div className="button">
        <button className="buttonStyle">Sell a Pint!</button>
      </div>
        <style jsx>{`
          .listStyle {
            display: flex;
            flex-direction: row;
            width: 270px;
            font-size: 25px;
            font-family: comic;
            font-weight: bold;
            text-align: left;
            margin-bottom: 8px;
            border: thick ridge navy;
            padding-left: 8px;
          }
          .listStyle:nth-child(1){
            background-color: #28a745;
          }
          .listStyle:nth-child(2){
            background-color: #ffc107;
          }
          .listStyle:nth-child(3){
            background-color: #17a2b8;
          }
          .button{
          align-self: flex-end;
          height: 30px;
          }
          .buttonStyle{
            width: 100px;
          }
          .infoStyle{
            width:800px;
          }

      `}</style>
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
