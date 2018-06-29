import React from "react";


function NewKegForm() {
  return (
    <div>
      <form className="formStyle">
        <h1 className="header" >Add a New Keg!</h1>
        <input className="inputStyle"
          type="text"
          id="name"
          placeholder="Brand"/>
        <input className="inputStyle"
          type="text"
          id="type"
          placeholder="type"/>
        <input className="inputStyle"
          type="text"
          id="price"
          placeholder="price"/>
        <input className="inputStyle"
          type="text"
          id="pints"
          placeholder="pints"/>
        <input className="inputStyle"
          type="text"
          id="abv"
          placeholder="ABV"/>
        <button type="submit">Submit Form</button>
        <style jsx>{`
          .formStyle{
            display: flex;
            flex-direction: column;
            width: 300px;
            background-color: #593111;
          }
          .inputStyle{
            font-size: 30px;
            border: 5px solid gold;
            border-radius: 50px;
            margin: 10px;
            padding: 10px;
            background-color: tan;

          }
          .header{
            text-align: center;
            color: gold;
          }
      `}</style>
      </form>
    </div>
  );
}

export default NewKegForm;
