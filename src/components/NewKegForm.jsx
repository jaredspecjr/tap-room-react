import React from "react";
import PropTypes from "prop-types";

function NewKegForm(props) {
  let _name = null;
  let _type = null;
  let _price = null;
  let _pints = null;
  let _abv = null;

  function handleNewKegSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: _name.value, type: _type.value, price: _price.value,
    pints: _pints.value, abv: _abv.value});
     _name.value = "";
     _type.value = "";
     _price.value = "";
     _pints.value = "";
     _abv.value = "";
  }

  return (
    <div>
      <form onSubmit={handleNewKegSubmission} className="formStyle">
        <h1 className="header" >Add a New Keg!</h1>
        <input className="inputStyle"
          type="text"
          id="name"
          placeholder="Brand"
          ref={(input) => {_name = input;}}/>
        <input className="inputStyle"
          type="text"
          id="type"
          placeholder="type"
          ref={(input) => {_type = input;}}/>
        <input className="inputStyle"
          type="text"
          id="price"
          placeholder="price"
          ref={(input) => {_price = input;}}/>
        <input className="inputStyle"
          type="text"
          id="pints"
          placeholder="pints"
          ref={(input) => {_pints = input;}}/>
        <input className="inputStyle"
          type="text"
          id="abv"
          placeholder="ABV"
          ref={(input) => {_abv = input;}}/>
        <button className="buttonStyle" type="submit">Submit Form</button>
        <style jsx> {`
          .formStyle {
            display: flex;
            flex-direction: column;
            width: 300px;
            background-color: #724b2c;
          }
          .inputStyle {
            font-size: 30px;
            border: 5px solid gold;
            border-radius: 50px;
            margin: 10px;
            padding: 10px;
            background-color: #b79d87;
          }
          .header {
            text-align: center;
            color: gold;
          }
          ::placeholder {
            color: black;
          }
          .buttonStyle {
            font-size: 30px;
            border: 5px solid gold;
            border-radius: 50px;
            margin: 10px;
            padding: 10px;
            background-color: silver;
          }
      `}</style>
      </form>
    </div>
  );
}
NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm;
