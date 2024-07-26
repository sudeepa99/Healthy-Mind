import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navigation() {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <NavDropdown title="Types of depression" id="types">
              <NavDropdown.Item href="#major">Major depression</NavDropdown.Item>
              <NavDropdown.Item href="#persistent">Persistent depression</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#types"></Nav.Link>
            <Nav.Link href="#signs">Signs and symptoms</Nav.Link>
            <Nav.Link href="#causes">Causes of depression</Nav.Link>
            <Nav.Link href="#treatment">Treatment methods</Nav.Link>
            <Nav.Link href='#handling'>Handling depression</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
    </div>
  )
}
