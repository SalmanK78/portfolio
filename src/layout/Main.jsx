import React from 'react';
import Nav from '../components/Nav';
import Home from '../components/Home';

const Main = () => {
    return (
        <div className='main-bg bg-fixed overflow-auto flex flex-col lg:flex-row overflow-x-hidden'>
            <div className='lg:w-[124px]'>
                <Nav></Nav>
            </div>
            <div className='w-full  mx-auto'>
                <Home></Home>
            </div>
        </div>
    );
};

export default Main;