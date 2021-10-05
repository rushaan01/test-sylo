import * as React from "react";
import { Component, useState } from "react";
import { Link } from "react-router-dom";

interface newContact {
  name: string;
  logo: string;
  ethereumAddress: string;
}

const NewContact = () => {
  const [state, setState] = useState({
    Contacts: [],
    newName: "",
    newEth: "",
  });

  const addContact = (name: any, eth: any) => {
    if (name === "") {
      name = "(BlankName)";
    }
    if (eth === "") {
      eth = "BlankAddress ";
    }
    var contacts =
      localStorage.getItem("contacts") !== null
        ? JSON.parse(localStorage.contacts)
        : [];

    var newId = 0;
    for (var i = 0; i < contacts.length; i++) {
      if (contacts[i].id > newId) {
        newId = contacts[i].id;
      }
    }
    var id = newId + 1;
    console.log(id);
    const myArr = name.split(" ");
    if (myArr.length == 1) {
      var logo = myArr[0][0];
    } else if (myArr.length < 1) {
      logo = "";
    } else {
      var logo = myArr[0][0] + myArr[1][0];
    }
    logo = logo.toUpperCase();

    contacts.push({
      id,
      name,
      logo,
      eth,
    });

    localStorage.setItem("contacts", JSON.stringify(contacts));
    console.log(localStorage.contacts);
  };

  console.log(JSON.stringify(localStorage.contacts));
  return (
    <div className="newScreen">
      <div className="newContactHeader">
        <div className="backLogo">
          <Link to="contacts">
            <img src="/Images/Vector.svg" alt="" width="30px" height="30px" />
          </Link>
        </div>
        <p className="sendtitle">New Contact</p>
        <div className="blank"></div>
      </div>
      <div>
        <input
          type="text"
          value={state.newName}
          placeholder="Name"
          onChange={(e) => setState({ ...state, newName: e.target.value })}
        />
      </div>
      <div>
        <input
          id="nameId"
          value={state.newEth}
          placeholder="Ethereum Address"
          onChange={(e) => setState({ ...state, newEth: e.target.value })}
        ></input>
      </div>
      <p className="valid">Please enter A Valid Ethereum address</p>
      <Link to="/contacts">
        <div
          className="saveButton"
          onClick={() => addContact(state.newName, state.newEth)}
        >
          Save
        </div>
      </Link>
    </div>
  );
};

export default NewContact;
