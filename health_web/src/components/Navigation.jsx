import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const dropDownStyle={
    color:"#e0f2fe",
    fontweight: 'bold'
  };
  return (
    <div className='flex-row gap-16 bg-custom-blue'  >
        <Navbar>
        <Container >
          <Nav >
            <NavDropdown as={Link} to="types" title={<span style={dropDownStyle}>Types of Depression </span>} id="types" className='text-white'>
              <NavDropdown.Item href="#major" className='text-black'>Major depression</NavDropdown.Item>
              <NavDropdown.Item href="#persistent" className='text-black'>Persistent depression</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="signs" className='text-cyan-50'>Signs and symptoms</Nav.Link>
            <Nav.Link as={Link} to="causes"  className='text-cyan-50'>Causes of depression</Nav.Link>
            <Nav.Link as={Link} to="treatment" className='text-cyan-50'>Treatment methods</Nav.Link>
            <Nav.Link as={Link} to="handling" className='text-cyan-50'>Handling depression</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
    </div>
  )
}
