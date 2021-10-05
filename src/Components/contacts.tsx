import { listenerCount } from "process";
import * as React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Contact from "./contact";
import Send from "./send";

const Contacts = () => {
  const [state, setState] = useState<any>({
    Contacts: [],
    sortedBy: "newestFirst",
  });

  useEffect(() => {
    if (localStorage.getItem("contacts") !== null) {
      let newContacts = JSON.parse(localStorage.contacts);
      console.log(state);
      setState({ ...state, Contacts: newContacts });
    }
  }, [state.sortedBy]);

  const sortList = () => {
    var contacts = JSON.parse(localStorage.contacts);
    if (state.sortedBy == "newestFirst") {
      var newContacts = contacts.sort((a: any, b: any) =>
        a.name.toUpperCase() < b.name.toUpperCase()
          ? -1
          : a.name.toUpperCase() > b.name.toUpperCase()
          ? 1
          : 0
      );
      localStorage.setItem("contacts", JSON.stringify(newContacts));

      setState({ ...state, Contacts: newContacts });
      setState({ ...state, sortedBy: "alphabetically" });
      //console.log(state);
    } else {
      var newContacts = contacts.sort((a: { id: number }, b: { id: number }) =>
        a.id < b.id ? -1 : a.id > b.id ? 1 : 0
      );
      localStorage.setItem("contacts", JSON.stringify(newContacts));

      setState({ ...state, Contacts: newContacts });
      setState({ ...state, sortedBy: "newestFirst" });
      //console.log(state);
    }
  };

  return (
    <div className="newScreen">
      <div className="header">
        <div className="backLogo">
          <Link to="/">
            <img src="/Images/Vector.svg" alt="" width="30px" height="30px" />
          </Link>
        </div>
        <p className="title">Address Book</p>

        <div className="sortButton" onClick={() => sortList()}>
          <img src="./Images/sortLogo.svg" alt="" width="25px" height="25px" />
        </div>
      </div>

      <div className="contactRow">
        <Link to="add-contact">
          <img src="/Images/Plus.svg" alt="" style={{ marginRight: "15px " }} />
        </Link>
        <div style={{ flex: 1 }}>
          <div className="contactName">
            <Link to="add-contact">New Contact</Link>
          </div>
        </div>
      </div>
      {state.Contacts !== undefined &&
        state.Contacts.length > 0 &&
        state.Contacts.map(
          (
            c: { name: string; logo: string; eth: string },
            i: React.Key | null | undefined
          ) => (
            <Link
              to={{
                pathname: "/send",
                state: { name: c.name, logo: c.logo, eth: c.eth },
              }}
              key={i}
            >
              <Contact
                key={i}
                name={c.name}
                logo={c.logo}
                ethereumAddress={c.eth}
              ></Contact>
            </Link>
          )
        )}

      <div className="buttonContainer">
        <div className="disconnectButton">
          <Link to="/">
            <p>Disconnect</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
