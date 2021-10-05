import * as React from "react";
import { Component, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface EditPageProps {
  name: string;
  logo: string;
  eth: string;
}
interface EditPageState {
  newName: string;
  newEth: string;
}
const EditPage = (props: EditPageProps) => {
  const [state, setState] = useState({
    newName: "",
    newEth: "",
  });
  const location = useLocation<any>();
  const { name, logo, eth } = location.state;

  const deleteItem = (name: any, eth: any) => {
    var contacts = JSON.parse(localStorage.contacts);
    console.log(contacts);
    var newContacts = contacts.filter(function (contact: any) {
      if (contact.name != name && contact.eth != eth) {
        return contact;
      }
    });
    localStorage.setItem("contacts", JSON.stringify(newContacts));
    console.log(localStorage.contacts);
  };

  const editItem = (name: any, eth: any, newName: any, newEth: any) => {
    if (newName === "") {
      newName = name;
    }
    if (newEth === "") {
      newEth = eth;
    }

    var contacts = JSON.parse(localStorage.contacts);
    var newContacts = contacts.filter(function (contact: any) {
      if (contact.name != name) {
        return contact;
      }
    });
    const myArr = newName.split(" ");
    console.log(myArr.length);
    if (myArr.length == 1) {
      var logo = myArr[0][0];
    } else {
      var logo = myArr[0][0] + myArr[1][0];
    }
    console.log(logo);
    newContacts.push({
      name: newName,
      logo,
      eth: newEth,
    });
    localStorage.setItem("contacts", JSON.stringify(newContacts));
    console.log(localStorage.contacts);
  };

  const getName = () => {};
  return (
    <div className="newScreen">
      <div className="newContactHeader">
        <div className="backLogo">
          <Link to="/contacts">
            <img src="/Images/Vector.svg" alt="" width="30px" height="30px" />
          </Link>
        </div>
        <p className="editTitle"> Edit</p>
        <div className="blankEdit"></div>
      </div>

      <div>
        <input
          type="text"
          value={state.newName}
          placeholder={name}
          onChange={(e) => setState({ ...state, newName: e.target.value })}
        />
      </div>
      <div>
        <input
          id="nameId"
          value={state.newEth}
          placeholder={eth}
          onChange={(e) => setState({ ...state, newEth: e.target.value })}
        ></input>
      </div>
      <p className="valid">Please enter A Valid Ethereum address</p>
      <Link to="/contacts">
        <div onClick={() => deleteItem(name, eth)} className="deleteBar">
          <p className="ethVal">Delete Contact</p>
        </div>
      </Link>

      <Link to="/contacts">
        <div
          onClick={() => editItem(name, eth, state.newName, state.newEth)}
          className="saveButton"
        >
          Save
        </div>
      </Link>
    </div>
  );
};

export default EditPage;
