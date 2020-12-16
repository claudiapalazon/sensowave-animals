import React from "react";
import logo from "../images/sensowave.png";

const Header = () => {
  return (
    <>
      <img className="logo" src={logo} alt="SensoWave" title="SensoWave" />
      <h1 className="title">List of Animals</h1>
    </>
  );
};

export default Header;
