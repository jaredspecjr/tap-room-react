import React from "react";
import { Link } from "react-router-dom";

function Head(){
  return (
    <div className="head">
      <h1>Welcome to Brewfest!</h1>
      <Link to="/">Home</Link> | <Link to="/NewKegForm">Add a Keg</Link>
        <style jsx> {`
          .head {
            text-align: center;
            font-size: 20px;
            margin-top: -20px;
            font-family: sans-serif;
          }
      `}</style>
    </div>
  );
}

export default Head;
