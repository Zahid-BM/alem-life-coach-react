import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import Banner from './Banner';
import Faq from './Faq';
import Footer from './Footer';
import Services from './Services/Services';

const Home = () => {
    return (
        <>
            <PageTitle title={'Home'} pageColor={'home-bg'}></PageTitle>
            <Banner></Banner>
            <Services></Services>
            <Faq></Faq>
            <Footer></Footer>
        </>
    );
};

export default Home;