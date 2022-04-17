import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Service = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <>
            <Col className='g-4' lg={4}>
                <Card className='h-100'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className='fw-bold fs-3'>{name}</Card.Title>
                        <Card.Subtitle className='text-muted fs-4 my-3'> Price : $ {price}</Card.Subtitle>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Button  variant="info">Book Service</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Service;