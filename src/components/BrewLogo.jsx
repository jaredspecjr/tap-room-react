import React from "react";

function BrewLogo() {
  return (
   <div>
      <h1 className="logoStyle">Brewery Bro's</h1>
      <style jsx> {`
        .logoStyle {
          background-color: brown;
          width: 280px;
          border-radius: 50%;
          border-style: double;
          text-align: center;
          padding-top: 10px;
          padding-bottom: 10px;
          margin-bottom: 8px;
        }
    `}</style>
  </div>
  );
}

export default BrewLogo;
