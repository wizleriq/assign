import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';

const Product = () => {
  return (
    <div className=' lg:flex lg:justify-between  mr-40 text-center capitalize w-[40%] lg:w-[100%]' style={{height: '60px', gap: '0px', padding: '16px 160px 16px 160px' }}>
      <div className='hidden lg:block md:block'>
        <h2 className='text-lg font-normal w-[121px] h-[24px] text-[#000000] sm:text-left lg:text-center text-left' style={{ fontSize: '24px', fontWeight: "500", lineHeight: "24px" }}>
          ECHOMAX
        </h2>
      </div>
      <div className=''>
        <ul className=' block  lg:flex'>
          <li className='ml-6' style={{ width: '40px', height: '24px', color:'#6C7275' }}><Link to='/'><a>home</a></Link></li>
          <li className='ml-6' style={{ height: '24px', color:'#6C7275', font:'500', lineHeight:'24px'}}><a href=''>about us</a></li>
          <li className='ml-6' style={{ width: '53px', height: '24px', color:'#141718', font:'500', fontSize: '14px', lineHeight:'24px', textAlign: 'left', color: '#141718'}}><Link to='/checkout'><a>product</a></Link></li>
          <li className='ml-6' style={{ width: '75px', height: '24px', font:'500', fontSize: '14px', lineHeight:'24px', color: '#6C7275'}}><Link to='/complete'><a>contact us</a></Link></li>
        </ul>
      </div>
      <div className='hidden lg:block md:block list-none'>
        <ul className='flex'>
          <li className='ml-6' style={{ width: '20px', height: '20px', color:'#141718', left:'2px', top:'2px', gap: '0px', border:'1.5px 0px 0px 0px', opacity:'0px'}}><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
          <li className='ml-6' style={{ width: '20px', height: '20px', color:'#141718', left:'2px', top:'2px', gap: '0px', border:'1.5px 0px 0px 0px', opacity:'0px'}}><FontAwesomeIcon icon={faUser} /></li>
          <li className='ml-6'><Link to='/cartitem'><FontAwesomeIcon icon={faCartShopping} /></Link></li>
          {/* <button className='border  bg-red-500 text-white rounded-md pt-1 pb-1 pl-4 pr-4  mt-3 absolute top-12 right-3'><Link to="/login">LOGIN</Link></button> */}
        </ul>
      </div>
    </div>
  );
}

export default Product;
