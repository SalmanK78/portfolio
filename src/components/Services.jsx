import React from 'react';
import SectionTitle from './Shared/SectionTitle';
import './style.css'
import { Fade } from 'react-awesome-reveal';

const Services = () => {
    const services = [
        {
            name:'Website Design',
            title:'Continue indulged speaking the was horrible for domestic position. Seeing get rather her you not esteem men settle is genius take excuse. Deal say over you age comparison new ham melancholy.',
            img:'https://validthemes.tech/themeforest/wordpress/ambrox/wp-content/uploads/2023/01/1-1.png'
        },
        {
            name:'App Developement',
            title:'Continue indulged speaking the was horrible for domestic position. Seeing get rather her you not esteem men settle is genius take excuse. Deal say over you age comparison new ham melancholy.',
            img:'https://validthemes.tech/themeforest/wordpress/ambrox/wp-content/uploads/2023/01/2.png'
        },
        {
            name:'Ux/UI Design',
            title:'Continue indulged speaking the was horrible for domestic position. Seeing get rather her you not esteem men settle is genius take excuse. Deal say over you age comparison new ham melancholy.',
            img:'https://validthemes.tech/themeforest/wordpress/ambrox/wp-content/uploads/2023/01/4.png'
        }
    ]
    return (
        <div className='px-10'>
            <div className='services-box'>
            <div className='py-20 text-center'>
            <SectionTitle heading="MY EXPERTIES" subHeading="What I Do"></SectionTitle>
            </div>
            <div id='services-grid' className='grid xl:grid-cols-3 md:grid-cols-2 xl:gap-0 gap-5 px-5 md:px-20'>
                {
                    services.map(({title,img,name})=><div key={name} className='div flex md:block md:text-left items-center justify-center flex-col text-center md:p-5 md:bg-[rgba(22,17,17,0.28)] xl:bg-transparent'>
                        <div className='w-20 h-20 mb-10'>
                            <img  src={img} alt=""/>
                        </div>
                        <div className=''>
                            <Fade>
                            <h1 className='text-white text-2xl font-bold mb-5'>{name}</h1>
                            <text className='text-gray-400'>{title}</text>
                            </Fade>
                        </div>
                    </div>)
                }
            </div>
        </div>
        </div>
    );
};

export default Services;