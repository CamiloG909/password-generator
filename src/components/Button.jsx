import React from "react";

const Button = ({ name, config, setConfig }) => {
  const updateConfig = () => {
    setConfig({
      ...config,
      [name]: !config[name],
    });
  };

  if (config[name]) {
    return (
      <button className="generate-btn-check" onClick={updateConfig}>
        <i className="bi bi-check-lg"></i>
      </button>
    );
  } else {
    return (
      <button className="generate-btn-check --unchecked" onClick={updateConfig}>
        <i className="bi bi-x-lg"></i>
      </button>
    );
  }
};

export default Button;
