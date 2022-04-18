import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import image from '../../images/Passport size below 200kb.jpeg'

const AboutMe = () => {
    return (
        <>
            <Container className='my-5'>
                <Row>
                    <Col className='my-auto' lg={6}>
                        <h1 className='fw-bolder display-3 '><span className='text-secondary'>Hello ! This is BM</span> <span className='text-info'>Zahidul Islam</span></h1>
                        <br />
                        <h6><span className='text-info'>Profession</span> : Programmer (Course on going...)</h6>
                        <h6><span className='text-info'>Job Experience</span> : H&M Merchandiser, Supply Chain Officer at Ananta Apparels Limited.</h6>
                        <h6><span className='text-info'>Academic Background</span> : BA and MA in English. National University, Bangladesh.</h6>
                        <h6><span className='text-info'>Location</span> : Dhaka, Bangladesh.</h6>
                        <br />
                        <br />
                        <h2 className='text-info'>Career Goal</h2>
                        <p className='text-secondary'>Currently I am having my programming course from Programming Hero on Full Stack Web Development. After having completed this course I will try for job and later on after having some experiences and enriching my programming skills I have a plan to start a business of my own.</p>
                    </Col>
                    <Col lg={6}>
                        <img className='w-100 rounded' src={image} alt="" />
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default AboutMe;