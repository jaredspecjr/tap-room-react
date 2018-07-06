import React from "react";
import Head from "./Head";
import KegList from "./KegList";
import BrewLogo from "./BrewLogo";
import Error404 from "./Error404";
import NewKegForm from "./NewKegForm";
import { Switch, Route } from "react-router-dom";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      pints: 124
    }

    this.subtractPint = this.subtractPint.bind(this);
    console.log(this.state);
  }
  subtractPint(){
    this.setState({pints: this.state.pints -1});
  }
  render(){
    return (
      <div className="mainContent">
        <Head/>
        <Switch>
          <Route exact path="/" render={()=><KegList pints={this.state.pints} onHandlePints={this.subtractPint} />} />
          <Route path="/NewKegForm" component={NewKegForm} />
          <Route component={Error404} />
        </Switch>
        <button onClick={this.subtractPint}>test</button>
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
}

export default App;
