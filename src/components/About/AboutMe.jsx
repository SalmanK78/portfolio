import React from 'react';
import SectionTitle from '../Shared/SectionTitle';
import Resume from './Resume';

const AboutMe = () => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <SectionTitle heading={"ABOUT ME"}></SectionTitle>
            </div>
            <Resume></Resume>
            
        </div>
    );
};

export default AboutMe;