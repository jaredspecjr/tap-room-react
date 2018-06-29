import React from "react";
import Keg from "./Keg";

function KegList(){

  return (
    <Keg
      name="Yuengling"
      type="Lager"
      price="$2.50"
      pints="124"
      abv="2.5%"
      />
  );
}

export default KegList;
