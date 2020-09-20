import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ViewTodo from "./components/view-todo"
import HomePage from "./components/home";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
     
    };
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/view-todo" component={ViewTodo} />
        </Switch>
      </Router>
    );
  }
}

export default App;

