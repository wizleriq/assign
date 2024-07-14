import React from 'react';
import Product from '../product/Product';
import Cartprod from '../cartprod/Cartprod';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, fa2, fa3 } from '@fortawesome/free-solid-svg-icons';
import Prod from '../prod/Prod';


const Cartlist = () => {
  return (
    <>
   <Cartprod />
     
      <section className="flex lg:justify-center  ">
        <div className="flex flex-col lg:justify-center lg:items-center w-screen lg:w-[832px] h-[166px]" style={{ gap: '40px' }}>
          <h2 className="font-medium text-2xl md:text-3xl lg:text-4xl items-center text-center" style={{ fontFamily: 'poppins', lineHeight: '58px', letterSpacing: '-1px', color: '#000000', fontWeight: '500' }}>
            Cart
          </h2> 

          <div className="flex lg:justify-between justify-between w-full m-1">
            <div className=''>
              <p className="flex items-center gap-2 lg:border-none border-b-2  mb-4 md:mb-6 lg:mb-8 lg:pb-0 pb-4  w-56 border-[#141718]  lg:font-normal font-bold text-base "><FontAwesomeIcon icon={fa1} /> Shopping Cart</p>
            </div>
            <div>
              <div className='flex text-center items-center'>
              <FontAwesomeIcon icon={fa2} className='mr-3' />
              <p className=" items-center gap-2 hidden lg:block text-[#B1B5C3]"> Shopping Cart</p>
              </div>
           
            </div>
            <div className='hidden lg:block' >
              <p className="flex items-center gap-2 text-[#B1B5C3]"><FontAwesomeIcon icon={fa3} />Shopping Cart</p>
            </div>
          </div>
        </div>
      </section>
      <Prod />
    </>
  );
}

export default Cartlist;
