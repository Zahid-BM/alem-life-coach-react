import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogout = () => {
        signOut(auth);
    }
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
                            {
                                user ? <Button onClick={handleLogout} className='text-decoration-none' variant="white">Logout</Button> : <LinkContainer to='/login'>
                                    <NavLink>Login</NavLink>
                                </LinkContainer>
                            }
                        </Nav>

                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </>
    );
};

export default Header;