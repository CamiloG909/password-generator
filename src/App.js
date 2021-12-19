import React, { Fragment } from "react";
import Header from "./components/Header";
import Button from "./components/Button";

function App() {
  return (
    <Fragment>
      <Header />
      <h1 className="title">Password generator</h1>
      <main className="container">
        <form className="form-container">
          <p className="generate-text">Number of characters: </p>
          <div className="generate-increment-container">
            <button>
              <i className="bi bi-dash-lg"></i>
            </button>
            <span>0</span>
            <button>
              <i className="bi bi-plus-lg"></i>
            </button>
          </div>
          <p className="generate-text">¿Include symbols?</p>
          <Button />
          <p className="generate-text">¿Include numbers?</p>
          <Button />
          <p className="generate-text">¿Include capital letters?</p>
          <Button />
          <button className="generate-btn">
            Generate <i className="bi bi-lock-fill"></i>
          </button>
          <input className="generate-result" type="text" readOnly></input>
        </form>
      </main>
    </Fragment>
  );
}

export default App;
