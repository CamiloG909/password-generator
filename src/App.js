import React, { Fragment, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { CopyToClipboard } from "react-copy-to-clipboard";

import generatePassword from "./generatePassword";
import Header from "./components/Header";
import Button from "./components/Button";

function App() {
  const [config, setConfig] = useState({
    characters: 7,
    symbols: true,
    numbers: true,
    uppercase: true,
  });
  const [password, setPassword] = useState(generatePassword(config));

  const onSubmit = (e) => {
    e.preventDefault();

    setPassword(generatePassword(config));
  };

  const changeCharacters = (e) => {
    if (e.target.name === "decrementCharacters" && config.characters > 3) {
      setConfig({
        ...config,
        characters: config.characters - 1,
      });
    } else if (e.target.name === "incrementCharacters") {
      setConfig({
        ...config,
        characters: config.characters + 1,
      });
    }
  };

  return (
    <Fragment>
      <Header />
      <h1 className="title">Password generator</h1>
      <main className="container">
        <form className="form-container" onSubmit={onSubmit}>
          <p className="generate-text">Number of characters: </p>
          <div className="generate-increment-container">
            <button name="decrementCharacters" onClick={changeCharacters}>
              <i className="bi bi-dash-lg"></i>
            </button>
            <span>{config.characters}</span>
            <button name="incrementCharacters" onClick={changeCharacters}>
              <i className="bi bi-plus-lg"></i>
            </button>
          </div>
          <p className="generate-text">¿Include symbols?</p>
          <Button name="symbols" config={config} setConfig={setConfig} />
          <p className="generate-text">¿Include numbers?</p>
          <Button name="numbers" config={config} setConfig={setConfig} />
          <p className="generate-text">¿Include capital letters?</p>
          <Button name="uppercase" config={config} setConfig={setConfig} />
          <button
            className="generate-btn"
            onClick={() =>
              toast.success("Generated", {
                iconTheme: {
                  primary: "#1CCC5B",
                },
              })
            }
          >
            Generate <i className="bi bi-lock-fill"></i>
          </button>
          <CopyToClipboard text={password}>
            <input
              className="generate-result"
              type="text"
              value={password}
              readOnly
              onClick={() =>
                toast.success("Copied!", {
                  iconTheme: {
                    primary: "#1CCC5B",
                  },
                })
              }
            ></input>
          </CopyToClipboard>
        </form>
      </main>
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 1000,
          style: {
            fontSize: "1.5rem",
          },
        }}
      />
    </Fragment>
  );
}

export default App;
