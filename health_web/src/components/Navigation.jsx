import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
            <NavDropdown title={<span style={dropDownStyle}>Types of Depression </span>} id="types" className='text-white'>
              <NavDropdown.Item href="#major" className='text-black'>Major depression</NavDropdown.Item>
              <NavDropdown.Item href="#persistent" className='text-black'>Persistent depression</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#types" className='text-cyan-50'></Nav.Link>
            <Nav.Link href="#signs" className='text-cyan-50'>Signs and symptoms</Nav.Link>
            <Nav.Link href="#causes" className='text-cyan-50'>Causes of depression</Nav.Link>
            <Nav.Link href="#treatment" className='text-cyan-50'>Treatment methods</Nav.Link>
            <Nav.Link href='#handling' className='text-cyan-50'>Handling depression</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
    </div>
  )
}
