import './style.css'
import homeIcon from '../assets/icons/icons8-home-64.png'
import settingIcon from '../assets/icons/icons8-setting-96.png'
import portfolioIcon from '../assets/icons/icons8-portfolio-64.png'
import userIcon from '../assets/icons/icons8-male-user-50.png'
import resumeIcon from '../assets/icons/icons8-resume-48.png'
import contactIcon from '../assets/icons/icons8-messages-48.png'
import menuIcon from '../assets/icons/icons8-menu-48.png'
import { useState } from 'react'

const Nav = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div>
            <div className='flex lg:hidden justify-center items-center bg-white h-20 relative'>
                <div className='absolute left-10'>
                    <img onClick={()=>setOpen(!open)} className='w-10 cursor-pointer' src={menuIcon} alt="" />
                </div>
                
                <div>
                    <img className='w-52' src="https://validthemes.tech/themeforest/wordpress/ambrox/wp-content/uploads/2023/02/logo.svg" alt="" />
                </div>
            </div>
                <div className={`nav2 absolute flex flex-col bg-white  h-full p-7 z-50 transition-all  duration-1000 w-80 md:w-96 ${open ? ' visible opacity-100 top-0 left-0':'top-0 -left-96 invisible opacity-0'}`}>
                    <div className='w-full'>
                        <div className='flex justify-between items-center '>
                        <img className='w-52' src="https://validthemes.tech/themeforest/wordpress/ambrox/wp-content/uploads/2023/02/logo.svg" alt="" />
                        <img onClick={()=>setOpen(!open)} className='w-7 cursor-pointer' src={menuIcon} alt="" />
                        </div>
                    </div>
                    <a id='a' href="/">Home</a>
                    <a id='a' href="/services">Services</a>
                    <a id='a' href="/portfolio">Portfolio</a>
                    <a id='a' href="/about">About</a>
                    <a id='a' href="/resume">Resume</a>
                    <a id='a' href="/contact">Contact</a>
                </div>
            </div>
            <div className='hidden lg:flex overflow-hidden text-white lg:fixed  lg:bg-[#040836] lg:w-28  justify-between items-center lg:flex-col  lg:h-[100vh]'>
            <div className='h-28 w-28 p-5 bg-[#FF014F]'>
            <img src="https://validthemes.tech/themeforest/wordpress/ambrox/wp-content/uploads/2023/02/logo-icon-1.svg" alt="" />
            </div>
            <div className='font-bold'>
                <div className=' overflow-hidden nav flex lg:flex-col'>
                <a id='a' href="/"><div className='home'>Home</div><img className='icon' src={homeIcon} alt="" /></a>
                <a id='a' href="/services"><div className='home'>Services</div><img className='icon' src={settingIcon} alt="" /></a>
                <a id='a' href="/portfolio"><div className='home'>Portfolio</div><img className='icon' src={portfolioIcon} alt="" /></a>
                <a id='a' href="/about"><div className='home'>About</div><img className='icon' src={userIcon} alt="" /></a>
                <a id='a' href="/resume"><div className='home'>Resume</div><img className='icon' src={resumeIcon} alt="" /></a>
                <a id='a' href="/contact"><div className='home'>Contact</div><img className='icon' src={contactIcon} alt="" /></a>
                </div>
            </div>
            <div className=' h-28 w-28 '>
               
            </div>
            <div>
                
            </div>
        </div>
        </div>
    );
};

export default Nav;