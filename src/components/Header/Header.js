import React from 'react';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="info" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand className='fw-bolder fs-2 text-warning' as={Link} to="/">ALEM LIFE COACH</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to='/home'>
                                <NavLink>Home</NavLink>
                            </LinkContainer>
                            <LinkContainer to='/blogs'>
                                <NavLink>Blogs</NavLink>
                            </LinkContainer>
                            <LinkContainer to='/aboutme'>
                                <NavLink>About Me</NavLink>
                            </LinkContainer>
                        </Nav>
                        <Nav>
                            <LinkContainer to='/login'>
                                <NavLink>Login</NavLink>
                            </LinkContainer>
                        </Nav>

                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </>
    );
};

export default Header;