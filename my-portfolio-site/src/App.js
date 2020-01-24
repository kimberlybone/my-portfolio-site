import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap'
import './App.css';

import Footer from './ChildComponents/Footer'
import WelcomePage from './MainComponents/WelcomePage'
import WhatIDoPage from './MainComponents/WhatIDoPage'
import WhoIAmPage from './MainComponents/WhoIAmPage'
import ContactPage from './MainComponents/ContactPage'

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
        subTitle: "I am a web developer who loves design, traveling, and best of all coffee",
        subText: "Checkout my projects"
      },
      what: {
        title: "What I Do",
        subTitle: "Hobbies, skills, and more...",
        subText: "Checkout my projects"
      },
      who: {
        title: "Who Am I?"
      },
      contact: {
        title: "Let's Connect"
      }
    }
  }

  render() {
    const { headerLinks, welcome, what, who, contact } = this.state
    return(
      <Router>
        <Container className="p-0" fluid={ true } >
          <Navbar className="border-bottom" variant="light" expand="lg">

            <Navbar.Brand> Kimberly Bone </Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>

            <Navbar.Collapse id="navbar-toggle">

              <Nav className='ml-auto'>
                <Link className="nav-link" to="/my-portfolio-site" > Welcome </Link>
                <Link className="nav-link" to="/my-portfolio-site/what" > What I do </Link>
                <Link className="nav-link" to="/my-portfolio-site/who" > Who I am </Link>
                <Link className="nav-link" to="/my-portfolio-site/contact" > Contact Me </Link>
              </Nav>

            </Navbar.Collapse>

          </Navbar>

          <Route path="/my-portfolio-site" exact render={ () => <WelcomePage title={ welcome.title } subTitle={ welcome.subTitle } subText={ welcome.subText }/> }/>
          <Route path="/my-portfolio-site/what" exact render={ () => <WhatIDoPage title={ what.title } subTitle={ what.subTitle }/> }/>
          <Route path="/my-portfolio-site/who" exact render={ () => <WhoIAmPage title={ who.title } /> }/>
          <Route path="/my-portfolio-site/contact" exact render={ () => <ContactPage title={ contact.title } /> }/>

          <Footer></Footer>

        </Container>
      </Router>

    )
  };
}

export default App;
