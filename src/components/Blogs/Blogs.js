import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <>
            <Container >
                <h1 className='text-center text-info mt-5 mb-3'>Mandatory to Know the answers</h1>
                <Row>
                    <Col className='my-auto py-5' lg={7}>
                        <Accordion >
                            <Accordion.Item className='bg-dark text-white' eventKey="0">
                                <Accordion.Header >What is the coaching method?</Accordion.Header>
                                <Accordion.Body>
                                    Basically all these are pre-recorded video content. But depending on the requirement I also do specific video for specific people for some cases. Alongside, live call coaching is available 2 days in a week.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='bg-dark text-white' eventKey="1">
                                <Accordion.Header>How long does you provide services after the courses ?</Accordion.Header>
                                <Accordion.Body>
                                    I support and keep connection with my clients life long.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='bg-dark text-white' eventKey="2">
                                <Accordion.Header>Do you provide any discounts or coupons ?</Accordion.Header>
                                <Accordion.Body>
                                    Yes all the year it is running to provide discounts and coupon codes. Alongside, special discount for struggling people.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='bg-dark text-white' eventKey="3">
                                <Accordion.Header>Who run the course services alongside you?</Accordion.Header>
                                <Accordion.Body>
                                    All the course contents and coaching materials created and served by me only.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='bg-dark text-white' eventKey="4">
                                <Accordion.Header>Can I get my money back if no improvement ?</Accordion.Header>
                                <Accordion.Body>
                                    Yes, sure. I offer 100% money back guarantee by 2 months if there is no improvements.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='bg-dark text-white' eventKey="5">
                                <Accordion.Header>I have more questions. How to get answers? </Accordion.Header>
                                <Accordion.Body>
                                    You can can keep eyes on the FAQ section and if not satisfied then you can call and discuss me directly on Thursday 9pm over cellphone.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col className='py-5' lg={5}>
                        <img className='w-100 rounded-3' src="https://cdn.pixabay.com/photo/2021/11/14/19/04/programming-6795536_960_720.png" alt="" />
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default Blogs;