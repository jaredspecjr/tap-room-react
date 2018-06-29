import React from "react";
import Head from "./Head";
import KegList from "./KegList";
import BrewLogo from "./BrewLogo";

function App(){
  return (
    <div className="margin">
      <Head/>
      <BrewLogo/>
      <KegList/>
      <style jsx>{`
        .margin{
          margin: -7px;
        }
    `}</style>
    </div>
  );
}

export default App;
