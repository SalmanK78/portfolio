import React from 'react';
import './style.css'

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className=''>
            <h1 className='text-2xl' id='text-bg'>{heading}</h1>
            <p className='text-4xl text-white font-bold'>{subHeading}</p>
        </div>
    );
};

export default SectionTitle;