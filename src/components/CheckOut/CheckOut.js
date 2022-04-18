import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';

const CheckOut = () => {

    const handleFormSubmit = event => {
        event.preventDefault();
        toast('Well done !!! You have enrolled into the course')


    }
    return (
        <div>
            <Container className='my-5'>
                <h2 className='text-center text-secondary  display-3 pb-4'>This is Protected Checkout Route</h2>
                <Row>
                    <Col lg={8}>
                        <img className='w-100 h-100 rounded-3' src="https://cdn.pixabay.com/photo/2019/08/22/20/19/shopping-4424344_960_720.jpg" alt="" />
                    </Col>
                    <Col lg={4}>
                        <Form onSubmit={handleFormSubmit} className='p-4 shadow rouonded-3'>
                            <h3 className='text-center text-warning my-3'>Checkout Course</h3>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" name='name' required placeholder="Your name" />
                                <Form.Text className="text-muted">
                                    Name must be in capital letter.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="number" required placeholder="phone number" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Full Address</Form.Label>
                                <Form.Control as="textarea" required rows={3} />
                            </Form.Group>

                            <Form.Text className="text-muted">
                                Select payment Method
                            </Form.Text>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Bkash Payment" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox1">
                                <Form.Check type="checkbox" label="Bank Payment" />
                            </Form.Group>

                            <Button className='w-100' variant="warning" type="submit">
                                Proceed for Checkout
                            </Button>
                        </Form>
                    </Col>

                </Row>
                <ToastContainer></ToastContainer>
            </Container>
        </div>
    );
};

export default CheckOut;