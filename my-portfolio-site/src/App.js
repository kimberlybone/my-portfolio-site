import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: "Kimberly Bone",
      headerLinks: [
        { title: "Welcome", path: "/" },
        { title: "What I Do", path: "/what" },
        { title: "Who I Am", path: "/who" },
        { title: "Contact Me", path: "/contact" }
      ],
      welcome: {
        title: "Welcome",
        subTitle: "A little bit about me...",
        subText: "Checkout my projects"
      },
      what: {
        title: "What I Do",
        subTitle: "A little bit about me...",
        subText: "Checkout my projects"
      },
      who: {
        title: "Who I am"
      },
      contact: {
        title: "Let's Connect"
      }
    }
  }

  render() {
    return(
      <Router>
        <Route>Welcome</Route>
      </Router>

    )
  };
}

export default App;
