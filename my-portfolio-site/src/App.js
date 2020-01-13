import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap'
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
        <Container className='p-0' fluid={ true }>
          <Navbar className='border-bottom'>
            <Navbar.Brand> Kimberly Bone </Navbar.Brand>
            <Navbar.Toggle aria-controls='navbar-toggle'></Navbar.Toggle>
            <Navbar.Collapse id='navbar-collapse'></Navbar.Collapse>
            <Nav>
              <Link className='nav-link' to='/' > Welcome </Link>
              <Link className='nav-link' to='/what' > What I do </Link>
              <Link className='nav-link' to='/who' > Who I am </Link>
              <Link className='nav-link' to='/contact' > Contact Me </Link>
            </Nav>
          </Navbar>
        </Container>
      </Router>

    )
  };
}

export default App;
