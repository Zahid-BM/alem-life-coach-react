import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
            <Container fluid className='my-5'>
                <Row >
                    <Col className='mt-4' lg={6}>
                        <img className='w-100 rounded-3 h-100' src="https://cdn.pixabay.com/photo/2019/08/14/09/53/consulting-4405260_960_720.jpg" alt="" />
                    </Col>
                    <Col className='my-auto' lg={6}>
                        <h1 className='fw-bolder display-3 '><span className='text-secondary'>Welcome to</span> <span className='text-warning'>ALEM Life Coach</span></h1>
                        <p>I have been running this life coach website since 8 years successfully. Almost 3000 people have taken my life coach services and improved their lives tremendously and remarkably. Students, corporate and business individuals, housewives, doctors and programmers are also in close connection after having the courses. I do not sell courses rather I think I make a strong connection with people by improving their lives.</p>
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default Banner;