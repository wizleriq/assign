import React from 'react';
import pictwo from '../picture/pictwo.jpg';
import Footer from '../footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import News from '../news/News';
import Cartprod from '../cartprod/Cartprod';

const Prod = () => {
  return (
    <>
    {/* <Cartprod /> */}
      <div className="container mx-auto mt-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-8">
          <div className=" w-[376px] h-[530] lg:w-full py-0 px-[32px]">
            <div className="flex items-center justify-between border-b-2 mb-10 pb-8 border-[#6C7275] lg:mt-0 -mt-9">

              <h2 className=' font-semibold  text-xl lg:text-base lg:font-semibold lg:leading-[26px] text-[#121212]'>Product</h2> 
              <h2 className='text-base font-semibold leading-[26px] text-[#121212] hidden lg:block'>Quantity</h2>
              <h2 className='text-base font-semibold leading-[26px] text-[#121212] hidden lg:block'>Price</h2>
            </div>
            <section className="p-4 w-[312px] h- lg:w-full lg:h-screen lg:g-24 ">
        
              <div className="flex  w-[295px] lg:w-full h-[20px] lg:h-[30px] px-0 py-[24px]  justify-between items-center mb-4 lg:border-b-2 lg:mb-10 lg:pb-8 border-[#E8ECEF]">
                <img src={pictwo} alt="Product" className="w-[80px] h-[70px] object-contain mb-10" />
                <div className="flex-grow p-2 ">
                  <h3>Echo HX</h3>
                  <p>Color: Black</p>
                  <p>Remove</p>
                </div>
                <div className="flex items-center justify-center flex-grow">
                  <p>- 1 +</p>
                </div>
                <div className="flex items-center justify-end flex-grow">
                  <p>$549.00</p>
                </div>
              </div>
              <div className="flex items-center mb-4 lg:border-b-2 lg:mb-10 lg:pb-8 border-[#E8ECEF]">
                <img src={pictwo} alt="Product" className="w-[80px] h-[70px] object-contain mb-4" />
                <div className="flex-grow p-2">
                  <h3>Echo HX</h3>
                  <p>Color: Black</p>
                  <p>Remove</p>
                </div>
                <div className="flex items-center justify-center flex-grow">
                  <p>- 1 +</p>
                </div>
                <div className="flex items-center justify-end flex-grow">
                  <p>$549.00</p>
                </div>
              </div>
              <div className="flex items-center mb-4 lg:border-b-2 lg:mb-10 lg:pb-8 border-[#E8ECEF]">
                <img src={pictwo} alt="Product" className="w-[80px] h-[70px] object-contain mb-4" />
                <div className="flex-grow p-2">
                  <h3>Echo HX</h3>
                  <p>Color: Black</p>
                  <p>Remove</p>
                </div>
                <div className="flex items-center justify-center flex-grow">
                  <p>- 1 +</p>
                </div>
                <div className="flex items-center justify-end flex-grow">
                  <p>$549.00</p>
                </div>
              </div>
              {/* width: Fixed (312px)px;
height: Hug (171px)px;
padding: 24px 0px 24px 0px;
gap: 16px;
opacity: 0px; */}

              <div className=' mt-16 w-[312px] h-[172px] py-[24px] px-0px g-16'>
                <div className='w-[424px] h-[28px] gap-0'>
                  <h2 className='lg:font-medium lg:text-[20px] lg:leading-[28px] lg:text-left text-[#141718]' style={{fontfamily: 'poppins'}}>Have a coupon?</h2>
                  <p className='lg:font-normal lg:text-[16px] lg:leading-[26px] lg:text-left text-[#6C7275]'>Add your code for an instant cart discount</p>
                </div>
                <div>
                <form className='  g-16 lg:w-[424px] lg:h-[52px] lg:px-[16px] lg:py-[0px] border-[1px] mt-10 text-[#6C7275]mb-14 '>
                {/* width: Fixed (312px)px;
height: Hug (171px)px;
padding: 24px 0px 24px 0px;
gap: 16px;
opacity: 0px; */}

                  <div className=' p-2 gap-8 lg:px-0 lg:py-16px flex justify-between items-center lg:w-full lg:h-full'>
                    <div>
                      <span>Coupon Code</span>
                    </div>
                    <span className='g:font-medium lg:text-[16px] lg:leading-[28px] lg:text-left' style={{fontfamily:'inter', letterSpacing:'-0.4000000059604645px'}}>Apply</span>
                  </div>
                </form>
                </div>
              </div>
            </section>
          </div>
          <section className="p-4 h-[476px] w-full md:w-[413px] gap-16 border-[1px] rounded-md border-[#6C7275] md:mt-9">
            <div className="flex flex-col capitalize mb-5 gap-4">
              <h2 className='text-base font-medium leading-[28px] text-left text-[#141718]'>
                Cart Summary
              </h2>
              <div className='block'>
                <form className='w-full h-[52px] p-[13px 16px] rounded-md border-[1px] border-[#6C7275] mb-4'>
                  <div className='flex justify-between items-center w-full h-full p-2'>
                    <div className='flex items-center gap-2'>
                      <FontAwesomeIcon icon={faCircle} className='text-white rounded-full border-[1px] border-[#6C7275]' />
                      <span>Pick Up</span>
                    </div>
                    <span>$0.00</span>
                  </div>
                </form>
                <form className='w-full h-[52px] p-[13px 16px] rounded-md border-[1px] border-[#6C7275] mb-4'>
                  <div className='flex justify-between items-center w-full h-full p-2'>
                    <div className='flex items-center gap-2'>
                      <FontAwesomeIcon icon={faCircle} className='text-[#000] rounded-full border-[1px] border-[#6C7275]' />
                      <span>Shipping</span>
                    </div>
                    <span>+$15.00</span>
                  </div>
                </form>
                <form className='w-full h-[52px] p-[13px 16px] rounded-md border-[1px] border-[#6C7275]'>
                  <div className='flex justify-between items-center w-full h-full p-2'>
                    <div className='flex items-center gap-2'>
                      <FontAwesomeIcon icon={faCircle} className='text-white rounded-full border-[1px] border-[#6C7275]' />
                      <span>Estimated Tax</span>
                    </div>
                    <span>$21.00</span>
                  </div>
                </form>
              </div>
              <section className=''>
                <div className='flex  justify-between lg:w-[365px] lg:h-[52px] lg:py-[13px] lg:border-b'>
                  <div className='w-[64px] h-[26px] lg:gap-0'>
                    <h3 className='lg:text-base lg:font-medium lg:leading-[26px]lg:text-left text-[#141718]' style={{fontFamily:'inter'}}>Subtotal</h3>
                  </div>
                  <div className='w-[64px] h-[26px]  gap-0 text-[16px] font-semibold leading-[26px]
                  text-right' >
                    <h2> 1669.99</h2>
                  </div>
                </div>
              </section>
              <section className=''>
              <div className='flex  justify-between lg:w-[365px] lg:h-[52px] lg:py-[13px] -mt-4 '>
                  <div className='lg:w-[49px] lg:h-[32px] lg:g-0 '>
                    <h2  className='lg:text-[20px] lg:font-semibold lg:leading-[32px] lg:text-left '>Total</h2>
                  </div>
                  <div className='lg:w-[93px] lg:h-[32px] lg:left-[272px] g-0 '>
                    <h2 className='lg:text-[20px] lg:font-semibold  lg:leading-[32px] lg:text-right'>
                  $1684.99
                  </h2>
                  </div>
                </div>
                <div className='mt-8'>
                  <button className='lg:w-[365px] lg:h-[52px] lg:py-10px lg:px-26px lg:g-8 lg:rounded-md text-white bg-[#141718]  capitalize'>chekout</button>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
     <Footer />
    </>
  );
}

export default Prod;
