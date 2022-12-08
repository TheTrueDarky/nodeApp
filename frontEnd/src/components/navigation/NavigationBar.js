import './NavigationBar.css';

import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
        <div className='navigation-bar'>
            <Navbar bg="dark" expand="lg" className="navbar-dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>Characters API</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-toggle" />
                    <Navbar.Collapse id="navbar-toggle">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/add">Add Character</Nav.Link>
                            <Nav.Link as={Link} to="/viewchar">View Character</Nav.Link>
                            <Nav.Link as={Link} to="/viewdem">View Demon</Nav.Link>
                            <Nav.Link as={Link} to="/viewgi">View Giants</Nav.Link>
                            <Nav.Link as={Link} to="/viewgo">View Gods</Nav.Link>
                            <Nav.Link as={Link} to="/viewmon">View Monsters</Nav.Link>
                            <Nav.Link as={Link} to="/viewmor">View Mortals</Nav.Link>
                            <Nav.Link as={Link} to="/viewpri">View Primordials</Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavigationBar;