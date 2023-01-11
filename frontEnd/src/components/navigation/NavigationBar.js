import './NavigationBar.css';

import React from 'react';
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';
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
                            <Dropdown>
                                <Dropdown.Toggle variant="link" id="dropdown-basic">
                                    View Characters
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/viewchar">All Characters</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/viewdem">Demons</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/viewgi">Giants</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/viewgo">Gods/Goddess/Titans/Titaness</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/viewmon">Monsters</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/viewmor">Mortals</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/viewpri">Primordials</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavigationBar;
 