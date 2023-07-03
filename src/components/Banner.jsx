import React from 'react';
import img1 from '../assets/bg/bg.png'
import { Fade } from 'react-awesome-reveal';

const Banner = () => {
    return (
        <div className='flex lg:flex-row flex-col lg:text-left text-center mx-auto max-w-7xl lg:h-[70vh] h-[110vh] overflow-hidden'>
            <div className=' w-full text-white h-[30vh] lg:h-[85vh] flex flex-col justify-center ml-4'>
                <Fade>
                <h1 className='text-6xl font-bold mb-3'>Hi I'm Salman</h1>
                <h2 className='text-3xl'>Web Developer</h2>
                </Fade>
                <div>
                <button className='font-bold text-xl mt-10 px-10 py-3 rounded-full bg-[#040836]'>My Resume </button>
                </div>
            </div>
            <div className='relative mt-44 imgbg flex items-center justify-center w-full'>
                <div>
                    <div>
                        <img className='w-[500px]' src={img1} alt="" />
                    </div>
                    <div className= 'translate-y-[-80%] translate-x-[50px] z-10 absolute'>
                        <img className='w-[500px] p-10 ' src="https://freepngimg.com/thumb/man/2-2-man-transparent.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;