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
          <Nav className='gap-5'>
            <Nav.Link as={Link} to="/types" className='text-cyan-50 hover:text-green-500 hover:text-lg'>Types of Depression</Nav.Link>
            <Nav.Link as={Link} to="/signs" className='text-cyan-50 hover:text-green-500 hover:text-lg'>Signs and symptoms</Nav.Link>
            <Nav.Link as={Link} to="/causes"  className='text-cyan-50 hover:text-green-500 hover:text-lg'>Causes of depression</Nav.Link>
            <Nav.Link as={Link} to="/treatment" className='text-cyan-50 hover:text-green-500 hover:text-lg'>Treatment methods</Nav.Link>
            <Nav.Link as={Link} to="/handling" className='text-cyan-50 hover:text-green-500 hover:text-lg'>Handling depression</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
    </div>
  )
}
