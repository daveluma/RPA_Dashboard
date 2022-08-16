import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import gsa_logo from '../assets/gsa_logo.png';
import '../App.css';

function NavBar() {
  return (
    
    <Navbar className='nav' expand="lg">
      <Container fluid>
      <div>
            {/**GSA LOGO*/}
            <Link to="/main"><img src={gsa_logo} alt="GSA logo" style={{ maxHeight: '50px', paddingBottom:'15px', paddingRight:'10px' }}/></Link>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link style={{color: 'white', fontWeight: 'bold', paddingRight: '15px'}} className='navText' href="/main">Home</Nav.Link>
            <Nav.Link style={{color: 'white', fontWeight: 'bold', paddingRight: '15px'}} className='navText' href="/automation">Automations</Nav.Link>
            <Nav.Link style={{color: 'white', fontWeight: 'bold'}} href="#action2">Metrics</Nav.Link>
          </Nav>
          
          
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar