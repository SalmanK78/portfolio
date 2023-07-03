import React from 'react';
import SectionTitle from './Shared/SectionTitle';
import Projects from './Projects';

const Portfolio = () => {
    return (
        <div className='mt-20'>
            <div className='flex flex-col lg:items-start items-center'>
                <div>
                <img className='w-14' src="https://validthemes.tech/themeforest/wordpress/ambrox/wp-content/plugins/ambrox-core/assets/img/10.png" alt="" />
            <div className='translate-x-11 -translate-y-6 '>
                <SectionTitle heading="RECENT WORK"></SectionTitle>
            </div>
                </div> 
            </div>
            <Projects></Projects>
        </div>
    );
};

export default Portfolio;