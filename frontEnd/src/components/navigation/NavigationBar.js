import './NavigationBar.css';

import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
        <div className='navigation-bar'>
            <Navbar bg='dark' expand='lg' className='navbar-dark'>
                <Container>
                    <Navbar.Brand as={Link} to='/'>Characters API</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavigationBar;