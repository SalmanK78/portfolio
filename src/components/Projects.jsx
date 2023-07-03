import React from 'react';
import arrowIcon from '../assets/icons/icons8-arrow-100.png'
import Aos from 'aos';
import { Fade } from 'react-awesome-reveal';

Aos.init()

const Projects = () => {
    const projects = [
        {
            name:'Component',
            title:'App',
            img:'https://validthemes.tech/themeforest/wordpress/ambrox/wp-content/uploads/2023/01/4.jpg',
            siteLink:' https://the-kidlo-doll.web.app/'

        },
        {
            name:'Component',
            title:'App',
            img:'https://validthemes.tech/themeforest/wordpress/ambrox/wp-content/uploads/2023/01/1-1.jpg',
            siteLink:' https://the-kidlo-doll.web.app/'
        },
        {
            name:'Component',
            title:'App',
            img:'https://validthemes.tech/themeforest/wordpress/ambrox/wp-content/uploads/2023/01/6.jpg',
            siteLink:' https://the-kidlo-doll.web.app/'
        },
        {
            name:'Component',
            title:'App',
            img:'https://validthemes.tech/themeforest/wordpress/ambrox/wp-content/uploads/2023/01/5-1.jpg',
            siteLink:' https://the-kidlo-doll.web.app/'
        },
        {
            name:'Component',
            title:'App',
            img:'https://validthemes.tech/themeforest/wordpress/ambrox/wp-content/uploads/2023/01/7.jpg',
            siteLink:' https://the-kidlo-doll.web.app/'
        },
        {
            name:'Component',
            title:'App',
            img:'https://validthemes.tech/themeforest/wordpress/ambrox/wp-content/uploads/2023/01/8.jpg',
            siteLink:' https://the-kidlo-doll.web.app/'
        },
    ]
    return (
        <div className=''>
            <div className='grid gap-5 md:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto px-20'>
                {projects.map(({name,img,title,siteLink})=><div data-aos="zoom-in-up">
                    <Fade>
                    <div className='relative project' data-aos="zoom-in-up">
                        <img className='w-full' src={img} alt="" />
                        <div className='bg-[#040836] w-full  z-20 bottom-0'>
                            <div className="flex justify-between items-center h-full px-7 mx-auto">
                                <div className='ml-5 siteName'>
                                    <h1 className='text-gray-400 text-xl'>{name}</h1>
                                    <p className='text-xl text-gray-500'>{title}</p>
                                </div>
                                <div>
                                    <a target="_blank" href={siteLink}><img className="w-12 rounded-full bg-[#FF014F]" src={arrowIcon} alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Fade>
                </div>)

                }
            </div>
        </div>
    );
};

export default Projects;