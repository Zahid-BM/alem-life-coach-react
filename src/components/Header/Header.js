import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogout = () => {
        signOut(auth);
        toast('You Logged out. Please login to buy courses and visit protected page.');
    };

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
                            {/* conditional rendering */}
                            {
                                user ? <Button onClick={handleLogout} className='text-decoration-none' variant="secondary">Logout</Button> : <LinkContainer to='/login'>
                                    <NavLink><span className='text-secondary'>Login</span></NavLink>
                                </LinkContainer>
                            }
                        </Nav>

                    </Navbar.Collapse>
                </Container>
                <ToastContainer></ToastContainer>
            </Navbar>
        </>
    );
};

export default Header;