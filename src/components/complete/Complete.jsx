import React from 'react'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import pictwo from '../picture/pictwo.jpg'
import picnine from '../picture/picnine.jpg'
import picfour from '../picture/picfour.jpg'
import Footer from '../footer/Footer'
import Cartprod from '../cartprod/Cartprod'



const Complete = () => {
  return (
    <>
      <Cartprod />
      <section className='flex flex-col items-center lg:w-full lg:h-[1134px] lg:pt-[80px] lg:px-[304px] lg:gap-20 w-[376px] h-[1118px] pt-[80px] px-0 gap-0'>
        <div className=' flex flex-col items-center lg:w-[823px] lg:h-[164px] lg:gap-10 w-[376px] h-[254px] px-16 py-0 gap-10'>
          <div className='flex flex-col items-center lg:w-[280px] lg:h-[58px] w-[210px] h-[44px] gap-0'>
            <div className='flex items-center justify-center w-[376px] h-[134px] pt-0 pr-[32px] pb-0 pl-[32px]'>
              <h2 className='text-[54px] font-medium leading-[58px] text-center' style={{ letterSpacing: '-1px' }}>
                Complete!
              </h2>
            </div>
          </div>
          <div className='flex items-center justify-center lg:w-[823px] lg:h-[66px] w-full gap-8'>
            <div className='lg:w-[256px] lg:h-[66px] lg:pb-[6px] lg:g-[24px] lg:border-b-[3px] lg:flex flex items-center border-[#38CB89] hidden lg:flex'>
              <div className='flex'>
                <span><FontAwesomeIcon icon={faCircleCheck} className='lg:text-[#45B26B] lg:w-[24px] lg:h-[24px] lg:mr-3' /></span>
                <p className='lg:text-[#45B26B] lg:text-[16px] lg:font-semibold leading-[26px] lg:text-left'>Shopping cart</p>
              </div>
            </div>

            <div className='lg:w-[256px] lg:h-[66px] lg:pb-[6px] lg:g-[24px] lg:border-b-[3px] lg:flex flex items-center border-[#38CB89] hidden lg:flex'>
              <div className='flex'>
                <span><FontAwesomeIcon icon={faCircleCheck} className='lg:text-[#45B26B] lg:w-[24px] lg:h-[24px] lg:mr-3' /></span>
                <p className='lg:text-[#45B26B] lg:text-[16px] lg:font-semibold leading-[26px] lg:text-left'>Checkout details</p>
              </div>
            </div>

            <div className='lg:w-[256px] lg:h-[66px] lg:pb-[6px] lg:g-[24px] lg:border-b-[3px] lg:flex flex lg:items-center lg:border-[#23262F] w-[256px] h-[66px] pb-[6px] g-[32px] border-b-[3px] items-left border-[#23262F]'>
              <div className='flex'>
                <span><p className='lg:w-[24px] lg:h-[24px] lg:mr-3 lg:bg-[#23262F] lg:text-white lg:text-center lg:rounded-full w-[24px] h-[24px] mr-3 bg-[#23262F] text-white text-center rounded-full'>3</p></span>
                <p className='lg:text-[#23262F] lg:text-[16px] lg:font-semibold lg:leading-[26px] lg:text-left text-[#23262F] text-[16px] font-semibold leading-[26px] text-left'>Order complete</p>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:w-[738px] lg:h-[730px] lg:pt-[80px] lg:pr-[95px] lg:pb-[80px] lg:pl-[95px]'>
          <section className=' lg:w-[492px] lg:h-[138px] lg:gap-[16px] w-[280px] h-[156px] gap-[16px]'>
            <h4 className='lg:text-[28px] lg:font-medium lg:leading-[34px] lg:text-center text-[16px] font-semibold leading-[26px] text-left lg:text-[#6C7275] text-[#6C7275]' style={{ letterSpacing: '-0.6000000238418579px' }}>Thank you!</h4>
            <h1 className='lg:text-[40px] lg:font-medium lg:leading-[44px] lg:text-center lg:text-[#23262F] text-[34px] font-medium leading-[38px] text-left text-[#23262F]' style={{ letterSpacing: '-0.6000000238418579px' }}>Your order has been received</h1>
          </section>
          <section className='lg:w-[564px] lg:h-[112px] lg:gap-[40px] w-[280px] h-[104px] gap-[0px] justify-between  mt-4 lg:mt-4'>
            <div className='lg:flex flex lg:justify-around justify-center'>
              <div className='lg:w-[96px] lg:h-[112px] lg:gap-[0px] lg:bg-[#F3F5F7] w-[88px] h-[104px] gap-[0px] bg-[#F3F5F7]  flex items-center justify-center mx-auto relative'>
                {/* w-[88px] h-[104px] gap-[0px] bg-[#F3F5F7]
            w-[88px] h-[104px] gap-[0px] bg-[#F3F5F7]
           */}


                <img src={pictwo} className='lg:w-[80px] lg:h-[96px] lg:top-[16px] lg:pt-[13px] lg:pr-[0px] lg:pb-[13px]
              lg:pl-[0px] lg:gap-[10px] w-[80px] h-[96px] top-[8px] gap-[0px] ' />
                <li className="absolute top-2 lg:right-0 lg:left-18  right-0 left-[60px] transform translate-x-1/2 -translate-y-1/2 bg-black text-white rounded-full text-xs lg:w-5 w-5 lg:h-5 h-5 flex items-center justify-center">
                  3
                </li>

              </div>

              <div className='lg:w-[96px] lg:h-[112px] lg:gap-[0px] lg:bg-[#F3F5F7] w-[88px] h-[104px] gap-[0px] bg-[#F3F5F7]  flex items-center justify-center mx-auto relative'>

                <img src={picnine} className='lg:w-[80px] lg:h-[96px] lg:top-[16px] lg:pt-[13px] lg:pr-[0px] lg:pb-[13px]
              lg:pl-[0px] lg:gap-[10px] w-[80px] h-[96px] top-[8px] gap-[0px] ' />
                <li className="absolute top-2 lg:right-0 lg:left-18  right-0 left-[60px] transform translate-x-1/2 -translate-y-1/2 bg-black text-white rounded-full text-xs lg:w-5 w-5 lg:h-5 h-5 flex items-center justify-center">
                  3
                </li>

              </div>

              <div className='lg:w-[96px] lg:h-[112px] lg:gap-[0px] lg:bg-[#F3F5F7] w-[88px] h-[104px] gap-[0px] bg-[#F3F5F7]  flex items-center justify-center mx-auto relative'>

                <img src={picfour} className='lg:w-[80px] lg:h-[96px] lg:top-[16px] lg:pt-[13px] lg:pr-[0px] lg:pb-[13px]
              lg:pl-[0px] lg:gap-[10px] w-[80px] h-[96px] top-[8px] gap-[0px] ' />
                <li className="absolute top-2 lg:right-0 lg:left-18  right-0 left-[60px] transform translate-x-1/2 -translate-y-1/2 bg-black text-white rounded-full text-xs lg:w-5 w-5 lg:h-5 h-5 flex items-center justify-center">
                  3
                </li>
              </div>

            </div>
          </section>
          <section className='  mt-8 lg:mt-8 lg:w-[548px] lg:h-[148px] lg:gap-[32px] w-[280px] h-320px] g-[16px] '>
            <div className='lg:flex items-center justify-center mx-auto'>

              <div className='lg:w-[120px] lg:h-[148px] lg:gap-[20px]  '>
                <h3 className='lg:text-[14px] lg:font-semibold lg:leading-[22px] lg:text-left  lg:text-[#6C7275] text-[14px] font-semibold leading-[22px] text-left  text-[#6C7275] lg:mb-5'>
                  Order code:
                </h3>
                <h3 className='lg:text-[14px] lg:font-semibold lg:leading-[22px] lg:text-left  lg:text-[#6C7275]  text-[14px] font-semibold leading-[22px] text-left  text-[#6C7275] lg:mb-5'>

                  Date:
                </h3>
                <h3 className='lg:text-[14px] lg:font-semibold lg:leading-[22px] lg:text-left  lg:text-[#6C7275]  text-[14px] font-semibold leading-[22px] text-left  text-[#6C7275 ] lg:mb-5'>

                  Total:
                </h3>
                <h3 className='lg:text-[14px] lg:font-semibold lg:leading-[22px] lg:text-left  lg:text-[#6C7275] text-[14px] font-semibold leading-[22px] text-left text-[#6C7275] lg:mb-'>

                  Payment method:
                </h3>
              </div>
              <div className='lg:w-[103px] lg:h-[148px] lg:gap-[20px] '>
                <h3 className='lg:text-[14px] lg:font-semibold lg:leading-[22px] lg:text-left  lg:text-[#141718]  text-[14px] font-semibold leading-[22px] text-left  text-[#141718] lg:mb-5'>
                  #ACEICYNXRF
                </h3>

                <h3 className='lg:text-[14px] lg:font-semibold lg:leading-[22px] lg:text-left  lg:text-[#141718]  text-[14px] font-semibold leading-[22px] text-left  text-[#141718] lg:mb-5'>
                  July 8, 2024
                </h3>

                <h3 className='lg:text-[14px] lg:font-semibold lg:leading-[22px] lg:text-left  lg:text-[#141718]  text-[14px] font-semibold leading-[22px] text-left  text-[#141718] lg:mb-5'>
                  $1,684.00
                </h3>

                <h3 className='lg:text-[14px] lg:font-semibold lg:leading-[22px] lg:text-left  lg:text-[#141718]  text-[14px] font-semibold leading-[22px] text-left  text-[#141718]'>
                  Credit Card
                </h3>
              </div>
            </div>
          </section>

          <button className=' mt-8 lg:mt-8 lg:w-[219px] lg:h-[52px] lg:pt-[12px] lg:pr-[40px] lg:pb-[12px] lg:pl-[40px] lg:gap-[8px] lg:rounded-lg lg:border-[1px] lg:flex lg:items-center lg:justify-center lg:mx-auto w-[219px] h-[52px] pt-[12px] pr-[40px] pb-[12px] pl-[40px] gap-[8px] rounded-lg border-[1px] flex items-center justify-center mx-auto'>


            Back to Homepage
          </button>

        </div>

      </section>
      <Footer />
    </>

  )
}

export default Complete
