import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => {
    return (
        <Container className='py-5 my-5'>
            <div className='border border-4 border-warning rounded p-5 w-50 mx-auto my-5'>
                <h2 className='text-danger display-md-1 text-center'>Oppps !!!! 404</h2>
                <h3 className='text-warning text-center fs-md-2'>The path is unavailable</h3>
            </div>
        </Container>
    );
};

export default NotFound;