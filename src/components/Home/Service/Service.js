import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <>
            <Col className='g-4 hover' lg={4}> {/* hover effect added */}
                <Card className='h-100 shadow'>
                    <Card.Img className='img-thumbnail p-3' variant="top" src={img} />
                    <Card.Body className='p-4'>
                        <Card.Title className='fw-bold fs-3 mt-3'>{name}</Card.Title>
                        <Card.Subtitle className='text-muted fs-4 my-3'> Price : $ {price}</Card.Subtitle>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Link to='/checkout'><Button className='w-100 ' variant="info">Enroll to this course</Button></Link>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Service;