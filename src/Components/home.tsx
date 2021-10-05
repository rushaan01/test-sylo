import * as React from "react";
import { Component } from "react";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="metamask">
        <img src="/Images/metamaskLogo.svg" alt="" width="50%" height="50%" />
      </div>
      <h1 id="title">Crypto Address Wallet</h1>
      <p>The easiest and quickest way to manage and pay your contacts.</p>
      <p>Connect your wallet to begin.</p>
      <div className="Button">
        <NavLink to="/contacts">
          <p>Connect Wallet</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
