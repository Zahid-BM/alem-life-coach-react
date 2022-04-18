import React, { useRef, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

import { async } from '@firebase/util';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../firebase.init';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Register = () => {
    const userNameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [condition, setCondition] = useState(false);
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, profileError] = useUpdateProfile(auth);

    const handleCheckBox = event => {
        const agree = event.target.checked;
        setCondition(agree);

        console.log(condition);
    };

    const handleFormSubmit = async event => {
        event.preventDefault();
        const userName = userNameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: userName });
        console.log(updateProfile());
    };

    if (user) {
        toast('Account creation done !!!!');
        console.log(user);
        navigate('/');
    }
    return (
        <>
            <Container fluid className='my-5'>
                <Row>
                    <Col className='my-auto' lg={8}>
                        <img style={{ height: '53rem' }} className='w-100 rounded-3' src="https://cdn.pixabay.com/photo/2017/07/18/23/40/group-2517459_960_720.png" alt="" />
                    </Col>
                    <Col className='my-auto shadow p-5' lg={4}>
                        <h2 className='text-center text-info'>Register</h2>
                        <Form onSubmit={handleFormSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail1">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control ref={userNameRef} type="text" name='name' placeholder="Enter your name" required />
                                <br />
                                <Form.Label>Email address</Form.Label>
                                <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check onChange={handleCheckBox} type="checkbox" label="Agree with Alem's terms and condition ?" />
                            </Form.Group>
                            <p className='text-danger'>{error?.message || profileError?.message}</p>
                            {
                                condition ? <Button className='d-block w-100' variant="info" type="submit">
                                    Register
                                </Button> : <Button className='d-block w-100' disabled variant="info" type="submit">
                                    Register
                                </Button>
                            }
                        </Form>
                        <p className='my-4'>Already have an account ? <Link to='/login' className='text-warning text-decoration-none'>Login</Link></p>
                        <SocialLogin></SocialLogin>
                        <ToastContainer />
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default Register;