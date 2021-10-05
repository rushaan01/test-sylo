import * as React from "react";
import { Component, useState } from "react";
import {
  Link,
  match,
  RouteComponentProps,
  useLocation,
  withRouter,
} from "react-router-dom";

interface SendProps {
  name?: string;
  logo?: string;
  eth?: string;
}

interface SendState {
  amount: string;
}

const Send = (props: SendProps) => {
  const [state, setState] = useState({
    amount: "",
  });

  const location = useLocation<any>();
  const { name, logo, eth } = location.state;

  return (
    <div className="newScreen">
      <div className="sendHeader">
        <div className="backLogo">
          <Link to="/contacts">
            <img src="/Images/Vector.svg" alt="" width="30px" height="30px" />
          </Link>
        </div>
        <p className="sendtitle">Send to {name}</p>
        <Link
          to={{
            pathname: "/edit-page",
            state: { name: name, logo: logo, eth: eth },
          }}
        >
          <p className="edit">Edit</p>
        </Link>
      </div>

      <div className="iconContainer">
        <div className="sendIcon" id="circle">
          {logo}
        </div>
        <div className="edit">{eth}</div>
      </div>

      <div>
        <input
          id="nameId"
          value={state.amount}
          placeholder="Amount"
          onChange={(e) => setState({ ...state, amount: e.target.value })}
        ></input>
      </div>
      <div>
        <p className="tax">Tx fee:0.00021 ETH $0.53</p>
      </div>
      <div
        className="Button"
        onClick={() => alert("Send feature not implemented yet!")}
      >
        Send
      </div>
    </div>
  );
};

export default Send;
