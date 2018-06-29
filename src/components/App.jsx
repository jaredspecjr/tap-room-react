import React from "react";
import Head from "./Head";
import KegList from "./KegList";
import BrewLogo from "./BrewLogo";
import Error404 from "./Error404";
import { Switch, Route } from "react-router-dom";


function App(){
  return (
    <div className="margin">
      <Head/>
      <Switch>
        <Route exact path="/" component={KegList} />
        <Route component={Error404} />
      </Switch>
      <style jsx>{`
        .margin{
          margin: -7px;
        }
    `}</style>
    </div>
  );
}

export default App;
