import React from 'react';
import logo1 from './Logos/logo1.png';
import logo from './Logos/logo.png';
import FB from './Logos/FBlogo.png';
import Insta from './Logos/Instalogo.png';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Route from "react-router-dom/Route";
import Switch from "react-bootstrap/Switch";


function App() {
  return (
    <div className="App">
        <title>Soldaten.</title>

        <header>
          <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home"><img src={logo1} alt="Slogo" width={50} height={50} /></Navbar.Brand>
              <Navbar.Brand href="https://m.facebook.com/soldatendk/?locale2=da_DK"><img src={FB} alt="Slogo" width={50} height={50} /></Navbar.Brand>
              <Navbar.Brand href="https://www.instagram.com/soldatendk/?hl=da"><img src={Insta} alt="Slogo" width={30} height={30} /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                      <Nav.Link href="#/Home">Startside</Nav.Link>
                      <Nav.Link href="#Fifkassen">Fifkassen</Nav.Link>
                      <Nav.Link href="https://issuu.com/soldaten">Arkiv</Nav.Link>
                      <NavDropdown title="Readaktionen" id="basic-nav-dropdown">
                          <NavDropdown.Item href="#action/3.1">Kontakt</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Job hos soldaten</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Brevkasse</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action/3.4">Ønsker til redaktionen.</NavDropdown.Item>
                      </NavDropdown>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>


      </header>
      <body className="bodyApp">

        <Switch>
            <Route path={"/home"} component={Home}/>
            <Route exact path={"/"} render={()=><h1>Startside</h1>}/>
        </Switch>
        <p>
            If you made it this far, it indicates something is working.
        </p>
      </body>
    </div>
  );

}



export default App;


const Home = ()=>{
    return <div>
        <h1>Startside</h1>
        <img src={logo} cl assName="App-logo" alt="logo" rounded/>
    </div>
};
