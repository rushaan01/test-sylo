import React from "react";
import Home from "./Components/home";
import Contacts from "./Components/contacts";
import Send from "./Components/send";
import NewContact from "./Components/newContact";
import EditPage from "./Components/edit";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/contacts">
            <Contacts></Contacts>
          </Route>
          <Route path="/add-contact">
            <NewContact></NewContact>
          </Route>
          <Route path="/send">
            <Send></Send>
          </Route>
          <Route path="/edit-page">
            <EditPage name="Danil Linkov" logo="DL" eth="1"></EditPage>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
