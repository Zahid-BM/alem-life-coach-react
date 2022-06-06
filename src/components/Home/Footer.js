import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='bg-dark mt-5'>
            <footer className='text-center text-white py-5'>
                All right reserved &copy; ALEM Life Coach {year}
                <br />
            Email address : bmzahidulislam@outlook.com
                <br />
                Contact number : +880 1675633294
                <h4><span className='text-warning'>Alem Life Coach</span> the life changer</h4>
            </footer>
        </div>
    );
};

export default Footer;