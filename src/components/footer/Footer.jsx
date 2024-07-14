import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'; // Correct import for Instagram icon

const Footer = () => {
  return (
    <section className="h-[100%] lg:h-[33vh] items-center bg-[#232627] " style={{ padding: '10px 0' }}>
      <div className=' lg:text-center lg:items-center block lg:flex justify-center lg:justify-between w-[100vh%]  p-4 mr-40 ml-40 mt-0 text-white'>
        <div>
          <h2 className='items-center text-center  border-r-2 pb-8 border-[#141718] hidden:lg:border-r-2 lg:mb-8 lg:pb-0  lg:border-[#141718]' style={{ fontFamily: 'poppins', fontSize: '19px', fontWeight: '500', lineHeight: '24px', paddingRight: '20px' }}>
            ECHOMAX
          </h2>
        </div> 
        <div className=''>
          <ul className=' block lg:flex gap-6'>
            <li className='text-left' style={{ fontFamily: 'inter', fontSize: '14px', fontWeight: '400', lineHeight: '22px' }}><a href="#">Home</a></li>
            <li className='text-left' style={{ fontFamily: 'inter', fontSize: '14px', fontWeight: '400', lineHeight: '22px' }}><a href="#">About us</a></li>
            <li className='text-left' style={{ fontFamily: 'inter', fontSize: '14px', fontWeight: '400', lineHeight: '22px' }}><a href="#">Product</a></li>
            <li className='text-left' style={{ fontFamily: 'inter', fontSize: '14px', fontWeight: '400', lineHeight: '22px' }}><a href="#">Blog</a></li>
            <li className='text-left' style={{ fontFamily: 'inter', fontSize: '14px', fontWeight: '400', lineHeight: '22px' }}><a href="#">Contact us</a></li>
          </ul>
        </div>
      </div>
      <div className='flex justify-between  mt-8 lg:mt-12 mb-8 w-[100vh%]  p-4 mr-40 ml-40 text-white capitalize'>
        <ul className='flex gap-6'>
          <li className='text-left' style={{ fontFamily: 'inter', fontSize: '12px', fontWeight: '400', lineHeight: '20px' }}><a href="#">copy right @ 2024</a></li>
          <li className='text-left' style={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: '600', lineHeight: '20px' }}><a href="#">our policies</a></li>
          <li className='text-left' style={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: '600', lineHeight: '20px' }}><a href="#">terms of use</a></li>
        </ul>
        <div className='flex gap-4'>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
