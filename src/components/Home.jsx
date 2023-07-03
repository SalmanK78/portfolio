import React from 'react';
import Banner from './Banner';
import Services from './Services';
import Portfolio from './Portfolio';
import Resume from './About/Resume';
import Contact from './Contact';
import AboutMe from './About/AboutMe';

const Home = () => {
    return (
        <div className='w-full'>
           <Banner></Banner>
           <Services></Services>
           <Portfolio></Portfolio>
           <AboutMe></AboutMe>
           <Contact></Contact>
        </div>
    );
};

export default Home;