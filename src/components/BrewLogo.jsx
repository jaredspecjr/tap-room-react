import React from "react";

function BrewLogo() {
  return (
   <div>
      <h2 className="logoStyle">Brewery Bro's!</h2>
      <style jsx>{`
        .logoStyle {
          background-color: brown;
          max-width: 250px;
          min-width: 250px;
          border-radius: 50%;
          border-style: double;
          text-align: center;
          padding: 10px;
        }
    `}</style>
  </div>
  );
}

export default BrewLogo;
