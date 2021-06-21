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

    state = {
      title: "Kimberly Bone",
      headerLinks: [
        { title: "Welcome", path: "/" },
        { title: "What I Do", path: "/what" },
        { title: "Who I Am", path: "/who" },
        { title: "Contact Me", path: "/contact" }
      ],
      welcome: {
        title: "Welcome()",
        subTitle: "I am a Full-Stack Developer with a passion for building digital products that improve people's everyday lives",
        subText: ""
      },
      who: {
        title: `Who_Am_I()`
      },
      what: {
        title: "What_I_Do()",
        subTitle: "Checkout my projects && more about me",
        subText: ""
      },
      contact: {
        title: "Connect_With_Me()"
      }
    }

  render() {
    const { headerLinks, welcome, what, who, contact } = this.state
    return(
      <Router>
        <Container className="p-0" fluid={ true } >
          <Navbar variant="light" expand="lg">

            <Navbar.Brand> Kimberly Bone </Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>

            <Navbar.Collapse id="navbar-toggle">

              <Nav className='ml-auto'>
                <Link className="nav-link" to="/" > Welcome </Link>
                <Link className="nav-link" to="/my-portfolio-site/who_am_i" > Who I am </Link>
                <Link className="nav-link" to="/my-portfolio-site/what_i_do" > What I do </Link>
                <Link className="nav-link" to="/my-portfolio-site/contact" > Contact Me </Link>
              </Nav>

            </Navbar.Collapse>

          </Navbar>

          <Route path="/" exact render={ () => <WelcomePage title={ welcome.title } subTitle={ welcome.subTitle } subText={ welcome.subText }/> }/>
          <Route path="/my-portfolio-site/who_am_i" exact render={ () => <WhoIAmPage title={ who.title } /> }/>
          <Route path="/my-portfolio-site/what_i_do" exact render={ () => <WhatIDoPage title={ what.title } subTitle={ what.subTitle }/> }/>
          <Route path="/my-portfolio-site/contact" exact render={ () => <ContactPage title={ contact.title } /> }/>

          <Footer></Footer>

        </Container>
      </Router>

    )
  };
}

export default App;
