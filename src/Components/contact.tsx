import * as React from "react";
import { Component } from "react";

interface ContactProps {
  name: string;
  logo: string;
  ethereumAddress: string;
}

interface ContactState {}

const Contact = (props: ContactProps) => {
  return (
    <div className="contactRow">
      <div className="icon">{props.logo}</div>

      <div style={{ flex: 1 }}>
        <div className="contactName">{props.name}</div>
      </div>
    </div>
  );
};

export default Contact;
