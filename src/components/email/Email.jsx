import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import pictwo from '../picture/pictwo.jpg'
import picfour from '../picture/picfour.jpg'
import picseven from '../picture/picseven.jpg'
// import pictwo from '../picture/pictwo.jpg'

const Email = () => {
  return (

    <div className="container mx-auto mt-16 lg:px-8">
      <div className=" w-[375px] h-[2283.78px] pt-0 pr-[32px] pb-[80px] pl-[32px] g-24px lg:w-[1120px] lg:h-[1634px] lg:py-[80]  px-0 grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-8">
        <section>
          <div className='  lg:w-[643px] lg:h-[372px] lg:pt-[40px] lg:pr-[24px] lg:pb-[40px] lg:pl-[24px] lg:gap-24  lg:rounded-md lg:border-[1px] w-[312px] h-[338px] pt-[24px] pr-[ 16px] pb-[24px] pl-[16px] g-24 rounded-md border-[1px] '>
            <div className='lg:w-[198px] lg:h-[28px] lg:gap-0 w-[149px] h-[26px] gap-0'>
              <h2 className='lg:font-medium lg:text-[20px] lg:leading-[28px] lg:text-left lg:text-[#000000] font-semibold text-[16px] leading-[26px] text-left '>
                Contact Infomation
              </h2>
            </div>
            <div className='mt-6 lg:mt-6 lg:flex flex lg:w-[595px] lg:h-[64px] lg:g-0 lg:justify-between w-[280px] h-[64px] g-0 justify-between '>
              <div className=' lg:w-[285.5px] lg:h-[64px] lg:gap-12 w-[136px] h-[64px] gap-12'>
                {/* <h3 className='lg:w-[74px] lg:h-[12px] lg:gap-0 w-[74px] h-[12px] gap-0'> */}
                <h3 className='lg:font-bold lg:text-[12px] lg:leading-[12px] lg:text-left lg:text-[#6C7275] font-bold text-[12px] leading-[12px] text-left text-[#6C7275] mb-2 lg:mb-4'>
                  FIRST NAME
                </h3>

                <form className='lg:w-[285.5px] lg:h-[40px] lg:pt-0 lg:pr-[16px] lg:pb-[16px] lg:pl-0 lg:rounded-md lg:border-[1px] bg-[#fff] w-[136px] h-[40px] lg:pt-0px pr-[16px] pb-0px pl-[16px] g-8 rounded-md border-[1px] text-[#CBCBCB]'>
                  <input type='text' placeholder='First name' className='lg:w-[253.5px] lg:h-[26px] lg:g-8 lg:items-center lg:text-[16px] lg:font-normal lg:leading-[26px] lg:text-left  lg:px-3 lg:py-3 w-[ 104px] h-[22px] g-0 lg:outline-none outline-none ' />
                </form>
              </div>

              <div>
                <h3 className='lg:font-bold lg:text-[12px] lg:leading-[12px] lg:text-left lg:text-[#6C7275] font-bold text-[12px] leading-[12px] text-left text-[#6C7275] mb-2 lg:mb-4'>
                  LAST NAME
                </h3>
                <form className='lg:w-[285.5px] lg:h-[40px] lg:pt-0 lg:pr-[16px] lg:pb-[16px] lg:pl-0 lg:rounded-md lg:border-[1px] bg-[#fff] w-[136px] h-[40px] lg:pt-0px pr-[16px] pb-0px pl-[16px] g-8 rounded-md border-[1px] text-[#CBCBCB]'>
                  <input type='text' placeholder=' Last name' className='lg:w-[253.5px] lg:h-[26px] lg:g-8 lg:items-center lg:text-[16px] lg:font-normal lg:leading-[26px] lg:text-left  lg:px-3 lg:py-3 w-[ 104px] h-[22px] g-0  lg:outline-none outline-none' />
                </form>
              </div>

            </div>

            <div className='lg:w-[595px] lg:h-[64px] lg:gap-12  w-[280px] h-[64px] gap-12 mt-6 lg:mt-6 '>
              <h3 className='lg:font-bold lg:text-[12px] lg:leading-[12px] lg:text-left lg:text-[#6C7275] font-bold text-[12px] leading-[12px] text-left text-[#6C7275] mb-2 lg:mb-4'>
                PHONE NUMBER
              </h3>
              <form className=' lg:w-[595px] lg:h-[40px] lg:pt-0lg:pr-[16px] lg:pb-0 lg:pl-[16px] lg:g-8 lg:rounded-lg lg:border-[1px] lg:text-[#CBCBCB] w-[280px] h-[40px] pt-0 pr-[16px] pb-0 pl-[16px] g-8 rounded-lg border-[1px] text-[#CBCBCB]'>
                <input type='text' placeholder=' Phone number' className='lg:w-[253.5px] lg:h-[26px] lg:g-8 lg:items-center lg:text-[16px] lg:font-normal lg:leading-[26px] lg:text-left  lg:px-3 lg:py-3 w-[248px] h-[22px] g-0 lg:outline-none outline-none   ' />
              </form>

            </div>

            <div className='lg:w-[595px] lg:h-[64px] lg:gap-12  w-[280px] h-[64px] gap-12 mt-6 lg:mt-6 '>
              <h3 className='lg:font-bold lg:text-[12px] lg:leading-[12px] lg:text-left lg:text-[#6C7275] font-bold text-[12px] leading-[12px] text-left text-[#6C7275] mb-2 lg:mb-4'>
                EMAIL ADDRESS
              </h3>
              <form className=' lg:w-[595px] lg:h-[40px] lg:pt-0lg:pr-[16px] lg:pb-0 lg:pl-[16px] lg:g-8 lg:rounded-lg lg:border-[1px] lg:text-[#CBCBCB] w-[280px] h-[40px] pt-0 pr-[16px] pb-0 pl-[16px] g-8 rounded-lg border-[1px] text-[#CBCBCB]'>
                <input type='text' placeholder=' Your Email' className='lg:w-[253.5px] lg:h-[26px] lg:g-8 lg:items-center lg:text-[16px] lg:font-normal lg:leading-[26px] lg:text-left  lg:px-3 lg:py-3 w-[ 104px] h-[22px] g-0 lg:outline-none outline-none   ' />
              </form>
            </div>
          </div>

          <div className='lg:w-[643px] lg:h-[510px] lg:pt-[40px] lg:pr-[24px] lg:pb-[40px] lg:pl-[24px] lg:g-24 lg:rounded-md lg:border-[1px] lg:border-[#6C7275] w-[318px] h-[470.78px] pt-[24px] pr-[ 16px] pb-[24px] pl-[16px] g-24 rounded-md border-[1px] border-[#6C7275] lg:mt-4 mt-4'>
            <div className='lg:w-[177px] lg:h-[28px] lg:gap-0 w-[137px] h-[26px] gap-0'>
              <h2 className='lg:font-medium lg:text-[16px] lg:leading-[26px] lg:text-left lg:text-[#000000] font-semibold text-[16px] leading-[26px] text-left text-[#000000] '>
                Shipping Address
              </h2>
            </div>

            <div className='lg:w-[595px] lg:h-[64px] lg:gap-12  w-[280px] h-[64px] gap-12 mt-6 lg:mt-6 '>
              <h3 className='lg:font-bold lg:text-[12px] lg:leading-[12px] lg:text-left lg:text-[#6C7275] font-bold text-[12px] leading-[12px] text-left text-[#6C7275] mb-2 lg:mb-4'>
                STREET ADDRESS *
              </h3>
              <form className=' lg:w-[595px] lg:h-[40px] lg:pt-0lg:pr-[16px] lg:pb-0 lg:pl-[16px] lg:g-8 lg:rounded-lg lg:border-[1px] lg:text-[#CBCBCB] w-[280px] h-[40px] pt-0 pr-[16px] pb-0 pl-[16px] g-8 rounded-lg border-[1px] text-[#CBCBCB]'>
                <input type='text' placeholder=' Stress Address' className='lg:w-[253.5px] lg:h-[26px] lg:g-8 lg:items-center lg:text-[16px] lg:font-normal lg:leading-[26px] lg:text-left  lg:px-3 lg:py-3 w-[248px] h-[22px] g-0 lg:outline-none outline-none   ' />
              </form>

            </div>


            <div className='lg:w-[595px] lg:h-[64px] lg:gap-12  w-[280px] h-[64px] gap-12 mt-6 lg:mt-6 '>
              <h3 className='lg:font-bold lg:text-[12px] lg:leading-[12px] lg:text-left lg:text-[#6C7275] font-bold text-[12px] leading-[12px] text-left text-[#6C7275] mb-2 lg:mb-4'>
                COUNTRY*
              </h3>
              <form className=' lg:w-[595px] lg:h-[40px] lg:pt-0lg:pr-[16px] lg:pb-0 lg:pl-[16px] lg:g-8 lg:rounded-lg lg:border-[1px] lg:text-[#CBCBCB] w-[280px] h-[40px] pt-0 pr-[16px] pb-0 pl-[16px] g-8 rounded-lg border-[1px] text-[#CBCBCB]'>
                <input type='text' placeholder=' Country' className='lg:w-[253.5px] lg:h-[26px] lg:g-8 lg:items-center lg:text-[16px] lg:font-normal lg:leading-[26px] lg:text-left  lg:px-3 lg:py-3 w-[248px] h-[22px] g-0 lg:outline-none outline-none   ' />
              </form>

            </div>


            <div className='lg:w-[595px] lg:h-[64px] lg:gap-12  w-[280px] h-[64px] gap-12 mt-6 lg:mt-6 '>
              <h3 className='lg:font-bold lg:text-[12px] lg:leading-[12px] lg:text-left lg:text-[#6C7275] font-bold text-[12px] leading-[12px] text-left text-[#6C7275] mb-2 lg:mb-4'>
                TOWN / CITY *
              </h3>
              <form className=' lg:w-[595px] lg:h-[40px] lg:pt-0lg:pr-[16px] lg:pb-0 lg:pl-[16px] lg:g-8 lg:rounded-lg lg:border-[1px] lg:text-[#CBCBCB] w-[280px] h-[40px] pt-0 pr-[16px] pb-0 pl-[16px] g-8 rounded-lg border-[1px] text-[#CBCBCB]'>
                <input type='text' placeholder=' Town / City' className='lg:w-[253.5px] lg:h-[26px] lg:g-8 lg:items-center lg:text-[16px] lg:font-normal lg:leading-[26px] lg:text-left  lg:px-3 lg:py-3 w-[248px] h-[22px] g-0 lg:outline-none outline-none   ' />
              </form>
            </div>

            <div className='mt-6 lg:mt-6 lg:flex flex lg:w-[595px] lg:h-[64px] lg:g-0 lg:justify-between w-[280px] h-[64px] g-0 justify-between '>
              <div className=' lg:w-[285.5px] lg:h-[64px] lg:gap-12 w-[136px] h-[64px] gap-12'>
                {/* <h3 className='lg:w-[74px] lg:h-[12px] lg:gap-0 w-[74px] h-[12px] gap-0'> */}
                <h3 className='lg:font-bold lg:text-[12px] lg:leading-[12px] lg:text-left lg:text-[#6C7275] font-bold text-[12px] leading-[12px] text-left text-[#6C7275] mb-2 lg:mb-4'>
                  STATE
                </h3>

                <form className='lg:w-[285.5px] lg:h-[40px] lg:pt-0 lg:pr-[16px] lg:pb-[16px] lg:pl-0 lg:rounded-md lg:border-[1px] bg-[#fff] w-[136px] h-[40px] lg:pt-0px pr-[16px] pb-0px pl-[16px] g-8 rounded-md border-[1px] text-[#CBCBCB]'>
                  <input type='text' placeholder='State' className='lg:w-[253.5px] lg:h-[26px] lg:g-8 lg:items-center lg:text-[16px] lg:font-normal lg:leading-[26px] lg:text-left  lg:px-3 lg:py-3 w-[ 104px] h-[22px] g-0 lg:outline-none outline-none ' />
                </form>
              </div>

              <div>
                <h3 className='lg:font-bold lg:text-[12px] lg:leading-[12px] lg:text-left lg:text-[#6C7275] font-bold text-[12px] leading-[12px] text-left text-[#6C7275] mb-2 lg:mb-4'>
                  ZIP CODE
                </h3>
                <form className='lg:w-[285.5px] lg:h-[40px] lg:pt-0 lg:pr-[16px] lg:pb-[16px] lg:pl-0 lg:rounded-md lg:border-[1px] bg-[#fff] w-[136px] h-[40px] lg:pt-0px pr-[16px] pb-0px pl-[16px] g-8 rounded-md border-[1px] text-[#CBCBCB]'>
                  <input type='text' placeholder='Zip Code' className='lg:w-[253.5px] lg:h-[26px] lg:g-8 lg:items-center lg:text-[16px] lg:font-normal lg:leading-[26px] lg:text-left  lg:px-3 lg:py-3 w-[ 104px] h-[22px] g-0  lg:outline-none outline-none' />
                </form>
              </div>

            </div>
            <div className=' mt-6 lg:mt-6 flex lg:flex lg:justify-normal  lg:w-[339px] lg:h-[26px] lg:gap-12 w-[255.07px] h-[20.78px] gap-12'>


              <div className=''>
                <FontAwesomeIcon icon={faSquareCheck} className='lg:w-[24px] lg:h-[24px] lg:gap-10 lg:rounded-md lg:border-[1.5px ]' />


              </div>
              <div className='lg:w-[303px] lg:h-[26px] lg:g-0 w-[227px] h-[20px] g-0 '>
                <p className='font lg:font-medium lg:text-[16px] lg:leading-[26px] lg:text-left text-[#6C7275]  font-normal text-[12px]
                 leading-[20px} text-left font-medium text-[12px] leading-[20px] text-left'> Use a different billing address (optional)</p>


              </div>
            </div>



          </div>
          <div className='lg:w-[643px] lg:h-[468px] lg:pt-[40px] lg:pr-[24px] lg:pb-[40px] lg:pl-[24px] lg:g-24 lg:rounded-md lg:border-[1px] lg:border-[#6C7275] w-[318px] h-[470.78px] pt-[24px] pr-[ 16px] pb-[24px] pl-[16px] g-24 rounded-md border-[1px] border-[#6C7275] lg:mt-4 mt-4'>
            <div className='lg:w-[176px] lg:h-[28px] lg:gap-0 w-[176px] h-[28px] gap-0'>
              <h2 className='lg:font-medium lg:text-[20px] lg:leading-[28px] lg:text-left lg:text-[#000000] font-semibold text-[20px] leading-[28px] text-left text-[#000000] '>
                Payment method
              </h2>
            </div>

            <div className='lg:w-[595px] lg:h-[64px] lg:gap-12  w-[280px] h-[64px] gap-12 mt-6 lg:mt-6 '>
              <h3 className='lg:font-bold lg:text-[12px] lg:leading-[12px] lg:text-left lg:text-[#6C7275] font-bold text-[12px] leading-[12px] text-left text-[#6C7275] mb-2 lg:mb-4'>

              </h3>
              {/* <form className=' lg:w-[595px] lg:h-[40px] lg:pt-0lg:pr-[16px] lg:pb-0 lg:pl-[16px] lg:g-8 lg:rounded-lg lg:border-[1px] lg:text-[#CBCBCB] w-[280px] h-[40px] pt-0 pr-[16px] pb-0 pl-[16px] g-8 rounded-lg border-[1px] text-[#CBCBCB]'>
                <input type='text' placeholder=' Stress Address' className='lg:w-[253.5px] lg:h-[26px] lg:g-8 lg:items-center lg:text-[16px] lg:font-normal lg:leading-[26px] lg:text-left  lg:px-3 lg:py-3 w-[248px] h-[22px] g-0 lg:outline-none outline-none   ' />
              </form> */}
              <form className=' lg:w-[595px] lg:h-[40px] lg:pt-0lg:pr-[16px] lg:pb-0 lg:pl-[16px] lg:g-8 lg:rounded-lg lg:border-[1px] lg:text-[#CBCBCB] w-[280px] h-[40px] pt-0 pr-[16px] pb-0 pl-[16px] g-8 rounded-lg border-[1px] text-[#CBCBCB]'>
                <div className='flex justify-between items-center w-full h-full p-2'>
                  <div className='flex items-center gap-2 '>

                    <FontAwesomeIcon icon={faCircle} className='text-[#000] rounded-full border-[1px] border-[#6C7275]' />
                    <span>Pay by Card Credit</span>
                  </div>
                  <span>+$15.00</span>
                </div>
              </form>

            </div>


            <div className='lg:w-[595px] lg:h-[64px] lg:gap-12  w-[280px] h-[64px] gap-12 mt-6 lg:mt-6'>
              <h3 className='lg:font-bold lg:text-[12px] lg:leading-[12px] lg:text-left lg:text-[#6C7275] font-bold text-[12px] leading-[12px] text-left text-[#6C7275] mb-2 lg:mb-4'>

              </h3>
              {/* <form className=' lg:w-[595px] lg:h-[40px] lg:pt-0lg:pr-[16px] lg:pb-0 lg:pl-[16px] lg:g-8 lg:rounded-lg lg:border-[1px] lg:text-[#CBCBCB] w-[280px] h-[40px] pt-0 pr-[16px] pb-0 pl-[16px] g-8 rounded-lg border-[1px] text-[#CBCBCB]'>
                <input type='text' placeholder=' Country' className='lg:w-[253.5px] lg:h-[26px] lg:g-8 lg:items-center lg:text-[16px] lg:font-normal lg:leading-[26px] lg:text-left  lg:px-3 lg:py-3 w-[248px] h-[22px] g-0 lg:outline-none outline-none   ' />
              </form> */}
              {/* <form className='w-full h-[52px] p-[13px 16px] rounded-md border-[1px] border-[#6C7275] mb-4'> */}
              <form className=' lg:w-[595px] lg:h-[40px] lg:pt-0lg:pr-[16px] lg:pb-0 lg:pl-[16px] lg:g-8 lg:rounded-lg lg:border-[1px] lg:text-[#CBCBCB] w-[280px] h-[40px] pt-0 pr-[16px] pb-0 pl-[16px] g-8 rounded-lg border-[1px] text-[#CBCBCB]'>
                <div className='flex justify-between items-center w-full h-full p-2'>
                  <div className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faCircle} className='text-[#fff] rounded-full border-[1px] border-[#6C7275]' />
                    <span>Pay by Transfer</span>
                  </div>
                  {/* <span>+$15.00</span> */}
                </div>
              </form>

            </div>


            <div className='lg:w-[595px] lg:h-[64px] lg:gap-12  w-[280px] h-[64px] gap-12 mt-6 lg:mt-6 '>
              <h3 className='lg:font-bold lg:text-[12px] lg:leading-[12px] lg:text-left lg:text-[#6C7275] font-bold text-[12px] leading-[12px] text-left text-[#6C7275] mb-2 lg:mb-4'>
                CARD NUMBER
              </h3>
              <form className=' lg:w-[595px] lg:h-[40px] lg:pt-0lg:pr-[16px] lg:pb-0 lg:pl-[16px] lg:g-8 lg:rounded-lg lg:border-[1px] lg:text-[#CBCBCB] w-[280px] h-[40px] pt-0 pr-[16px] pb-0 pl-[16px] g-8 rounded-lg border-[1px] text-[#CBCBCB]'>
                <input type='text' placeholder=' 1234 1234 1234' className='lg:w-[253.5px] lg:h-[26px] lg:g-8 lg:items-center lg:text-[16px] lg:font-normal lg:leading-[26px] lg:text-left  lg:px-3 lg:py-3 w-[248px] h-[22px] g-0 lg:outline-none outline-none   ' />
              </form>
            </div>

            <div className='mt-6 lg:mt-6 lg:flex flex lg:w-[595px] lg:h-[64px] lg:g-0 lg:justify-between w-[280px] h-[64px] g-0 justify-between '>
              <div className=' lg:w-[285.5px] lg:h-[64px] lg:gap-12 w-[136px] h-[64px] gap-12'>
                {/* <h3 className='lg:w-[74px] lg:h-[12px] lg:gap-0 w-[74px] h-[12px] gap-0'> */}
                <h3 className='lg:font-bold lg:text-[12px] lg:leading-[12px] lg:text-left lg:text-[#6C7275] font-bold text-[12px] leading-[12px] text-left text-[#6C7275] mb-2 lg:mb-4'>
                  EXPIRATION DATE
                </h3>

                <form className='lg:w-[285.5px] lg:h-[40px] lg:pt-0 lg:pr-[16px] lg:pb-[16px] lg:pl-0 lg:rounded-md lg:border-[1px] bg-[#fff] w-[136px] h-[40px] lg:pt-0px pr-[16px] pb-0px pl-[16px] g-8 rounded-md border-[1px] text-[#CBCBCB]'>
                  <input type='text' placeholder='MM/YY' className='lg:w-[253.5px] lg:h-[26px] lg:g-8 lg:items-center lg:text-[16px] lg:font-normal lg:leading-[26px] lg:text-left  lg:px-3 lg:py-3 w-[ 104px] h-[22px] g-0 lg:outline-none outline-none ' />
                </form>
              </div>

              <div>
                <h3 className='lg:font-bold lg:text-[12px] lg:leading-[12px] lg:text-left lg:text-[#6C7275] font-bold text-[12px] leading-[12px] text-left text-[#6C7275] mb-2 lg:mb-4'>
                  CVC
                </h3>
                <form className='lg:w-[285.5px] lg:h-[40px] lg:pt-0 lg:pr-[16px] lg:pb-[16px] lg:pl-0 lg:rounded-md lg:border-[1px] bg-[#fff] w-[136px] h-[40px] lg:pt-0px pr-[16px] pb-0px pl-[16px] g-8 rounded-md border-[1px] text-[#CBCBCB]'>
                  <input type='text' placeholder='CVC code' className='lg:w-[253.5px] lg:h-[26px] lg:g-8 lg:items-center lg:text-[16px] lg:font-normal lg:leading-[26px] lg:text-left  lg:px-3 lg:py-3 w-[ 104px] h-[22px] g-0  lg:outline-none outline-none' />
                </form>
              </div>

            </div>
          </div>



          <button className=' mt-6 lg:mt-6 lg:w-[643px] lg:h-[52px] lg:pt-[12px] lg:pr-[40px] lg:pb-[12px] 
           lg:pl-[40px] lg:gap-8 lg:rounded-lg lg:bg-[#141718] w-[312px] h-[52px] pt-[12px] pr-[40px] pb-[12px] pl-40px] g-8
            rounded-lg bg-[#141718]'>
            <h2 className='lg:text-[16px] lg:font-medium  lg:leading-[28px] lg:text-center lg:text-[#FFFFFF]
              text-[16px] font-medium leading-[28px] text-center text-[#FFFFFF] ' style={{ letterSpacing: '-0.4000000059604645px' }}>Place Order</h2>

          </button>

        </section>

        <section>
          <div className=' lg:w-[413px] lg:h-[862px] lg:pt-[16px] lg:pr-[24px] lg:pb-[16px] lg:pl-[24px] lg:gap-16 lg:rounded-md
          lg:border-[1px] lg:border-[#6C7275] w-[312px] h-[811px]
          pt-[24px] pr-[ 16px] pb-[24px] pl-[16px] rounded-md border-[1px] border-[#6C7275] gap-16'>
            <div className='lg:w-[365px] lg:h-[34px] lg:gap-0 w-[280px] h-[28px] g-0'>

              <h2 className='lg:text-[28px] lg:font-medium lg:leading-[34px] lg:text-left text-[20px] font-medium leading-[28px]
 text-left'style={{ letterSpacing: '-0.6000000238418579px' }}>
                Order summary
              </h2>
              <div className=' lg:w-[365px] lg:h-[556px] lg:g-24 w-[280px] h-[508px] g-24 '>
                <section className=' lg:w-[376px] lg:h-[144px] lg:pt-[24px] lg:pr-0 lg:pb-[24px] lg:pl-0 lg:g-0 lg:border-b-[1px]
                lg:justify-between w-[280px] h-[128px] pt-[16px] pr-0 pb-[16px] pl-0 gap-0 border-b-[1px] justify-between'>
                  <div className='lg:w-[376px] lg:h-[96px] lg:gap-10 w-[280px] h-[96px] gap-10' >
                    <div className='lg:flex flex '>

                      <div className='lg:w-[80px] lg:h-[96px] lg:pt-[13px] lg:pr-0 lg:pb-[13px] lg:pl-0 lg:gap-10 
                       w-[80px] h-[96px] pt-[13px] pr-0 pb-[13px] pl-0 gap-10 lg:bg-[#F3F5F7] bg-[#F3F5F7]'>
                        <img src={pictwo} className='lg:w-[80px] lg:h-[70px] lg:gap-0 lg:object-fill' />
                      </div>

                      <div className='lg:w-[200px] lg:h-[90px] lg:gap-8
                       ml-2 w-[200px] h-[90px] gap-8  lg:ml-2'>

                        <h2 className='lg:text-[14px] lg:font-semibold lg:leading-[22px] lg:text-left lg:text-[#141718] text-[14px] font-semibold leading-[22px] text-left text-[#141718]
                       '>
                          Echo HX
                        </h2>
                        <p className='lg:text-[12px] lg:font-medium lg:leading-[20px] lg:text-left lg:text-[#9fa2a3] 
                        text-[12px] font-medium leading-[20px] text-left text-[#9fa2a3] mt-2 mb-3 lg:mt-2 lg:mb-2'>
                          Color: Black
                        </p>
                        <div className='lg:border-2 lg:rounded-md lg:w-20 lg:items-center lg:flex lg:justify-between lg:px-2
                       plg:y-0 border-2 rounded-md w-20 items-center flex justify-between px-2
                       py-0 '>
                          <span> - </span>
                          <span> 1 </span>
                          <span> + </span>
                        </div>
                      </div>
                      <div className='lg:w-[59px] lg:h-[54px] lg:g-8'>

                        <p className='lg:text-[14px] lg:font-semibold lg:leading-[22px]  lg:text-[#141718] 
                        text-[14px] font-semibold leading-[22px]  text-[#141718] lg:text-right text-right'>$549.00</p>
                      </div>

                    </div>
                  </div>
                </section>

                <section className=' lg:w-[376px] lg:h-[144px] lg:pt-[24px] lg:pr-0 lg:pb-[24px] lg:pl-0 lg:g-0 lg:border-b-[1px]
                lg:justify-between w-[280px] h-[128px] pt-[16px] pr-0 pb-[16px] pl-0 gap-0 border-b-[1px] justify-between'>
                  <div className='lg:w-[376px] lg:h-[96px] lg:gap-10 w-[280px] h-[96px] gap-10' >
                    <div className='lg:flex flex '>

                      <div className='lg:w-[80px] lg:h-[96px] lg:pt-[13px] lg:pr-0 lg:pb-[13px] lg:pl-0 lg:gap-10 
                       w-[80px] h-[96px] pt-[13px] pr-0 pb-[13px] pl-0 gap-10 lg:bg-[#F3F5F7] bg-[#F3F5F7]'>
                        <img src={picseven} className='lg:w-[80px] lg:h-[70px] lg:gap-0 lg:object-fill' />
                      </div>

                      <div className='lg:w-[200px] lg:h-[90px] lg:gap-8
                       ml-2 w-[200px] h-[90px] gap-8  lg:ml-2'>

                        <h2 className='lg:text-[14px] lg:font-semibold lg:leading-[22px] lg:text-left lg:text-[#141718] text-[14px] font-semibold leading-[22px] text-left text-[#141718]
                       '>
                          Echo HX
                        </h2>
                        <p className='lg:text-[12px] lg:font-medium lg:leading-[20px] lg:text-left lg:text-[#9fa2a3] 
                        text-[12px] font-medium leading-[20px] text-left text-[#9fa2a3] mt-2 mb-3 lg:mt-2 lg:mb-2'>
                          Color: Black
                        </p>
                        <div className='lg:border-2 lg:rounded-md lg:w-20 lg:items-center lg:flex lg:justify-between lg:px-2
                       plg:y-0 border-2 rounded-md w-20 items-center flex justify-between px-2
                       py-0 '>
                          <span> - </span>
                          <span> 1 </span>
                          <span> + </span>
                        </div>
                      </div>
                      <div className='lg:w-[59px] lg:h-[54px] lg:g-8'>

                        <p className='lg:text-[14px] lg:font-semibold lg:leading-[22px]  lg:text-[#141718] 
                        text-[14px] font-semibold leading-[22px]  text-[#141718] lg:text-right text-right'>$549.00</p>
                      </div>

                    </div>
                  </div>
                </section>

                <section className=' lg:w-[376px] lg:h-[144px] lg:pt-[24px] lg:pr-0 lg:pb-[24px] lg:pl-0 lg:g-0 lg:border-b-[1px]
                lg:justify-between w-[280px] h-[128px] pt-[16px] pr-0 pb-[16px] pl-0 gap-0 border-b-[1px] justify-between'>
                  <div className='lg:w-[376px] lg:h-[96px] lg:gap-10 w-[280px] h-[96px] gap-10' >
                    <div className='lg:flex flex '>

                      <div className='lg:w-[80px] lg:h-[96px] lg:pt-[13px] lg:pr-0 lg:pb-[13px] lg:pl-0 lg:gap-10 
                       w-[80px] h-[96px] pt-[13px] pr-0 pb-[13px] pl-0 gap-10 lg:bg-[#F3F5F7] bg-[#F3F5F7]'>
                        <img src={picfour} className='lg:w-[80px] lg:h-[70px] lg:gap-0 lg:object-fill' />
                      </div>

                      <div className='lg:w-[200px] lg:h-[90px] lg:gap-8
                       ml-2 w-[200px] h-[90px] gap-8  lg:ml-2'>

                        <h2 className='lg:text-[14px] lg:font-semibold lg:leading-[22px] lg:text-left lg:text-[#141718] text-[14px] font-semibold leading-[22px] text-left text-[#141718]
                       '>
                          Echo HX
                        </h2>
                        <p className='lg:text-[12px] lg:font-medium lg:leading-[20px] lg:text-left lg:text-[#9fa2a3] 
                        text-[12px] font-medium leading-[20px] text-left text-[#9fa2a3] mt-2 mb-3 lg:mt-2 lg:mb-2'>
                          Color: Black
                        </p>
                        <div className='lg:border-2 lg:rounded-md lg:w-20 lg:items-center lg:flex lg:justify-between lg:px-2
                       plg:y-0 border-2 rounded-md w-20 items-center flex justify-between px-2
                       py-0 '>
                          <span> - </span>
                          <span> 1 </span>
                          <span> + </span>
                        </div>
                      </div>
                      <div className='lg:w-[59px] lg:h-[54px] lg:g-8'>

                        <p className='lg:text-[14px] lg:font-semibold lg:leading-[22px]  lg:text-[#141718] 
                        text-[14px] font-semibold leading-[22px]  text-[#141718] lg:text-right text-right'>$549.00</p>
                      </div>

                    </div>

                  </div>

                </section>
                <div>
                  <div className=' mt-6 lg:mt-6 lg:flex flex lg:w-[365px] lg:h-[52px] lg:gap-12 w-[280px] h-[52px] gap-12'>

                    <form className='lg:w-[258px] lg:h-[52px] lg:pt:0 lg:pr-16 lg:pb-0 lg:pl-16 p- lg:g-8 lg-rounded-md lg:border-[1px]
               w-[173px] h-[52px] pt-0 pr-16 pb-0 pl-16 rounded-lg border-[1px]'>

                      <input type='text' placeholder=' input' className='lg:w-[226px] lg:h-[26px] lg:g-8 lg:items-left lg:text-[16px] lg:font-normal lg:leading-[26px] lg:text-left  lg:px-3 lg:py-3 w-[141px] h-[26px] g-0 lg:outline-none outline-none   ' />
                    </form>
                    <div className='lg:w-[95px] lg:h-[52px] lg:pt-[12px] lg:pr[26px] lg:pb-[12px] lg:pl-[26px] lg:g-8 lg:rounded-lg
              lg:bg-[#141718]  w-[95px] h-[52px] pt-[12px] pr[26px] pb-[12px] pl-[26px] lg:g-8 rounded-lg
            bg-[#141718]'>
                      <h3 className=' lg:text-[16px] lg:font-medium leading-[26px] lg:text-left  text-white'>
                        Apply
                      </h3>

                    </div>

                  </div>
                <section  className='
                lg:w-[365px] lg:h-208px] lg:gap-0 w-[208px] h-[211px] gap-0'>
       

                  <div className='  mt-6 lg:mt-6 lg:w-[312px] lg:h-[55px] lg:g-7  w-[280px] h-[55px] g-7'>
                <h3 className='lg:text-[16px] lg:font-semibold lg:leading-[26px] lg:text-left lg:text-[#141718]
                g:text-[16px] font-semibold leading-[26px] text-left text-[#141718]'>
                      Have a coupon?
                    </h3>
                    <p className='lg:text-[14px] lg:font-normal lg:leading-[22px] lg:text-left lg:text-[#6C7275] text-[14px] font-normal leading-[22px] text-left text-[#6C7275] mb-2 lg:mb-2'>
                   
Add your code for an instant cart discount</p>
{/* <form className='lg:w-[280px] lg:h-[280px] lg:pt-[13px] lg:pr-0 lg:pb-[13px] lg:pl-0 lg:text-[
#E8ECEF]'>
                      <input type='text' placeholder=' input' className='lg:w-[226px] lg:h-[26px] lg:g-8 lg:items-left lg:text-[16px] lg:font-normal lg:leading-[26px] lg:text-left  lg:px-3 lg:py-3 w-[141px] h-[26px] g-0 lg:outline-none outline-none   ' />
                    </form> */}
           
                    <form className='lg:w-[365px] lg:h-[52px] lg:pt-[13px] lg:pr-0 lg:pb-[13px] lg:pl-0 lg:g-0 lg:border-b-[1px w-[280px] h-[52px] pt-[13px] pr-0 pb-[13px] pl-0 gap-0 border-b-[1px]'>
                <div className='flex justify-between items-center w-full h-full p-2'>
                  <div className='flex items-center gap-2 '>
                    <span className='lg:text-[16px] lg:font-normal g:leading-[26px] lg:text-left lg:text-[#141718}  text-[16px] font-normal leading-[26px] text-left text-[#141718}'>Shipping</span>
              
                  </div>
                  <span className='lg:text-[16px] lg:font-semibold g:leading-[26px] lg:text-right lg:text-[#141718} text-[16px] font-semibold leading-[26px] text-right text-[#141718]'>Express Shipping</span>
                
                </div>
              </form>
              
              <form className='lg:w-[365px] lg:h-[52px] lg:pt-[13px] lg:pr-0 lg:pb-[13px] lg:pl-0 lg:g-0 lg:border-b-[1px] w-[280px] h-[52px] pt-[13px] pr-0 pb-[13px] pl-0 gap-0 border-b-[1px]'>
                <div className='flex justify-between items-center w-full h-full p-2'>
                  <div className='flex items-center gap-2 '>
                  <span className='lg:text-[16px] lg:font-normal g:leading-[26px] lg:text-left lg:text-[#141718}  text-[16px] font-normal leading-[26px] text-left text-[#141718}'>Subtotal</span>
              
              </div>
              <span className='lg:text-[16px] lg:font-semibold g:leading-[26px] lg:text-right lg:text-[#141718} text-[16px] font-semibold leading-[26px] text-right text-[#141718]'>$1699.99</span>
            
                </div>
              </form>

              <div className='lg:w-[365px] lg:h-[52px] lg:pt-[13px] lg:pr-0 lg:pb-[13px] lg:pl-0 lg:g-0 lg:border-b-[1px w-[280px] h-[52px] pt-[13px] pr-0 pb-[13px] pl-0 gap-0 '>
          
<div className='flex justify-between items-center w-full h-full p-2'>
                  <div className='flex items-center gap-2 '>
                  <span className='lg:text-[20px] lg:font-medium g:leading-[28px] lg:text-left lg:text-[#141718}  text-[20px] font-medium leading-[28px] text-left text-[#141718}'>Total</span>
                  </div>
                  <span className='lg:text-[20px] lg:font-medium g:leading-[28px] lg:text-right lg:text-[#141718} text-[20px] font-medium leading-[28px] text-right text-[#141718]'>$1684.99</span>
                </div>
              </div>

                  </div>
                  </section>


                </div>
              </div>
            </div>
          </div>



        </section>
      </div>

    </div>
  )
}

export default Email
