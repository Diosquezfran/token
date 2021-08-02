import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../../Marca/Principal/Imagotipo.png.png'
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <>
      <Navbar expand="lg" className={styles.navbar}>
        <Container style={{marginLeft : '1rem'}}>
          <Navbar.Brand href="#home" style={{paddingRight: '10rem'}}>
            <img
              src={logo}
              width="30"
              height="30"
              className={styles.logo}
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className={styles.textLink} className='text-white m-4 mt-2 fs-5'>Home</Nav.Link>
              <Nav.Link className={styles.textLink} className='text-white m-4 mt-2 fs-5'>Exchange</Nav.Link>
              <Nav.Link className={styles.textLink} className='text-white m-4 mt-2 fs-5'>Support</Nav.Link>
              <Nav.Link className={styles.textLink} className='text-white m-4 mt-2 fs-5'>Company</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
