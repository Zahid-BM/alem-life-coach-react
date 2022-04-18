import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

const Faq = () => {
    return (
        <>
            <Container className='my-5'>
                <h1 className='text-center text-info my-5 fs-1'>Frequently ask questions</h1>
                <Row>
                    <Col className='my-auto' lg={6}>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What is the coaching method?</Accordion.Header>
                                <Accordion.Body>
                                    Basically all these are pre-recorded video content. But depending on the requirement I also do specific video for specific people for some cases. Alongside, live call coaching is available 2 days in a week.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>How long does you provide services after the courses ?</Accordion.Header>
                                <Accordion.Body>
                                    I support and keep connection with my clients life long.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Do you provide any discounts or coupons ?</Accordion.Header>
                                <Accordion.Body>
                                    Yes all the year it is running to provide discounts and coupon codes. Alongside, special discount for struggling people.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Who run the course services alongside you?</Accordion.Header>
                                <Accordion.Body>
                                    All the course contents and coaching materials created and served by me only.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Can I get my money back if no improvement ?</Accordion.Header>
                                <Accordion.Body>
                                    Yes, sure. I offer 100% money back guarantee by 2 months if there is no improvements.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>I have more questions. How to get answers? </Accordion.Header>
                                <Accordion.Body>
                                    You can can keep eyes on the FAQ section and if not satisfied then you can call and discuss me directly on Thursday 9pm over cellphone.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col lg={6}>
                        <img className='w-100 rounded-3' src="https://cdn.pixabay.com/photo/2018/05/17/11/20/faq-3408300_960_720.jpg" alt="" />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Faq;