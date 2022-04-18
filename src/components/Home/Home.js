import React from 'react';
import Banner from './Banner';
import Faq from './Faq';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Faq></Faq>
        </div>
    );
};

export default Home;