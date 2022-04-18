import React from 'react';
import Banner from './Banner';
import Faq from './Faq';
import Footer from './Footer';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;