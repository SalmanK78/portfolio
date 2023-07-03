import React from 'react';
import './about.css'
const Skills = () => {
    const skills = [
        {
             skill:'Html',
             percentage:95
        },
        {
            skill:'Css',
            percentage:90
        },
        {
             skill:'JS',
             percentage:85
        },
        {
             skill:'React',
             percentage:85
        },
    
        {
             skill:'ExpressJs',
             percentage:70
        },
        {
            skill:'MongoDb',
            percentage:70
        },
        {
             skill:'NextJs',
             percentage:30
        },
    ]
    return (
        <div className='px-10'>
            <div className='grid lg:grid-cols-2 gap-x-10'>
                {skills.map(({skill,percentage})=><div key={skill} className='border-b border-gray-500'>
                    <div className='flex md:flex-row md:justify-between items-center h-20 relative md:max-w-lg mx-auto'>
                        <div className='text-xl absolute top-2 md:top-0 md:relative'>{skill}</div>
                            <div className='md:flex items-center gap-3'>
                            <span className='text-3xl md:relative absolute top-0 right-0'>{percentage}%</span>
                            <progress id='progress' className="progress md:w-56 bg-white md:relative absolute right-0" value={percentage} max="100"></progress>
                        </div>
                    </div>
                </div>)

                }
            </div>
        </div>
    );
};

export default Skills;