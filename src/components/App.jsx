import React from "react";
import Head from "./Head";
import KegList from "./KegList";
import BrewLogo from "./BrewLogo";
import Error404 from "./Error404";
import NewKegForm from "./NewKegForm";
import { Switch, Route } from "react-router-dom";

function App(){
  return (
    <div className="mainContent">
      <Head/>
      <Switch>
        <Route exact path="/" component={KegList} />
        <Route path="/NewKegForm" component={NewKegForm} />
        <Route component={Error404} />
      </Switch>
      <style jsx> {`
        .mainContent {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
    `}</style>
    </div>
  );
}

export default App;
