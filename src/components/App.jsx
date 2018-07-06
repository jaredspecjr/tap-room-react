import React from "react";
import Head from "./Head";
import KegList from "./KegList";
import BrewLogo from "./BrewLogo";
import Error404 from "./Error404";
import NewKegForm from "./NewKegForm";
import { Switch, Route } from "react-router-dom";
import { v4 } from "uuid";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      masterKegList : [
       {
         name: "Guinness",
         type: "Stout",
         price: "$5.00",
         pints: 124,
         id: v4(),
         abv: "3.8%"
       },
       {
         name: "Newcastle",
         type: "Ale",
         price: "$4.00",
         pints: 124,
         id: v4(),
         abv: "4.0%"
       },
       {
         name: "Yuengling",
         type: "Lager",
         price: "$2.50",
         pints: 124,
         id: v4(),
         abv: "2.5%"
       }
     ],
   };

    this.subtractPint = this.subtractPint.bind(this);
    console.log(this.state);
  }
  subtractPint(id){
    let newMasterKegList = this.state.masterKegList.slice();
    for(let i = 0; i < newMasterKegList.length; i++) {
      if ( newMasterKegList[i].id === id){
        newMasterKegList[i].pints -= 1;
        this.setState({masterKegList: newMasterKegList});
      }
    }
  }
  render(){
    return (
      <div className="mainContent">
        <Head/>
        <Switch>
          <Route exact path="/" render={()=><KegList masterKegList={this.state} onHandlePints={this.subtractPint} />} />
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
}

export default App;
