import React from "./react";


function NewKegForm() {
  return (
    <div>
      <h1>Add a New Keg!</h1>
      <form>
        <input
          type="text"
          id="name"
          placeholder="Brand"/>
        <input
          type="text"
          id="type"
          placeholder="type"/>
        <input
          type="text"
          id="price"
          placeholder="price"/>
        <input
          type="text"
          id="pints"
          placeholder="pints"/>
        <input
          type="text"
          id="abv"
          placeholder="ABV"/>
      </form>
    </div>
  );
}

export default NewKegForm;
