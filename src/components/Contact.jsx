import React from 'react';
import mailIcon from '../assets/icons/icons8-mail-100.png'
import locationIcon from '../assets/icons/icons8-location-100.png'
import phoneIcon from '../assets/icons/icons8-phone-100.png'
import Aos from 'aos';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

Aos.init();
const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_qg6zwcp',
     'template_9cwd6yi',
      form.current,
       'buz0Y7vtPtp174olS'
       )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    const contact =[
        {
            name:'Our Mail',
            img:mailIcon,
            info:'salmanhossen743@gmail.com'
        },
        {
            name:'Address',
            img:locationIcon,
            info:'Dhaka,Bangladesh'
        },
        {
            name:'Phone',
            img:phoneIcon,
            info:'+8801858437437'
        }
    ]
    return (
        <div className='max-w-6xl mx-auto ' data-aos="zoom-in-up">
            <div className='flex flex-col gap-5 md:flex-row w-full'>
                <div className= 'formarea bg-[#001b3b3b]  md:w-[60%] ml-3 rounded p-10'>
                    <h1 className='text-white text-xl mb-3'>Let's Contact</h1>
                    <form ref={form} onSubmit={sendEmail} className=''>
                        <input required className='w-full' id='input' type="text" name="user_name" placeholder='Name' />
                        <div className='flex flex-col sm:flex-row gap-2'>
                        <input required className='sm:w-1/2' id='input' type="email" name="user_email" placeholder='Email' />
                        <input className='sm:w-1/2' id='input' type="number" name="phone" placeholder='Phone' />
                        </div>
                        <textarea required className='bg-transparent border border-gray-600 w-full rounded-[7px] p-4 text-white' placeholder='About Your Project'  name="message" id="" rows="6"></textarea>
                        <button type='submit'  className='text-white text-lg font-bold bg-[#FF014F] px-6 py-3 rounded-full mt-3'>Send Message</button>
                    </form>
                </div>
                <div className='md:w-[40%] lg:ml-10 gap-20 flex lg:items-start items-center flex-col justify-center'>
                    {
                        contact.map(({name,img,info})=><div key={name} className='lg:flex gap-4'>
                            <div className='flex justify-center'>
                                <img className='bg-sky-500 p-4 w-16 rounded' src={img} alt="" /></div>
                            <div className='lg:text-left text-center'>
                                <h1 className='text-gray-400 font-bold '>{name}</h1>
                                <p className='text-white'>{info}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Contact;