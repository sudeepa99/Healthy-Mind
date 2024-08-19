import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
export default function Navigation() {
  return (
    <div className='flex-row gap-16 bg-custom-blue'  >
        <Navbar>
        <Container >
          <Nav >
            <Nav.Link as={Link} to="types" className='text-cyan-50'>Types of Depression</Nav.Link>
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
