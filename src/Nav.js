import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';






class nav extends Component {



  render() {
    return (
      <div>
      <Navbar  expand="lg bg-light">
    
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
       
       
          <Nav className="mr-auto">
          <Nav.Link href="Profile">Profile</Nav.Link>
          
        <Nav.Link href="../details">Details</Nav.Link>
           
            
           
          </Nav>
         
        </Navbar.Collapse>
      </Navbar>
     
</div>
      
    );
  }
}

export default nav;
