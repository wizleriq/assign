import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faList, faSliders } from '@fortawesome/free-solid-svg-icons';
import picone from '../picture/picone.jpg';
import pictwo from '../picture/pictwo.jpg';
import picten from '../picture/picten.jpg';
import Pictureeight from '../picture/Pictureeight.jpg';
import picnine from '../picture/picnine.jpg';
import News from '../news/News';

const Item = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://timbu-get-all-products.reavdev.workers.dev/123?organization_id=037fdda0a7af491caf93e601e090c184&Appid=9UCWAYBEHUPZJ0C&Apikey=1f245f9030fe401d8a270b9002d5d3a420240712173420614122');
        console.log(response.data);
        console.log('API Response:', response.data.items.photos);  // Log the response to inspect it
        setData(response.data.items);  // Assuming response.data is an array or an object containing the array you need
        console.log(data.current_price);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }; 

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

 

  return (
    <>
    <div className=" grid h-auto mr-[20px] ml-[24px] lg:mr-[155px] lg:ml-[155px]  p-4 mb-0" style={{ gridTemplateColumns: '13rem auto' }}>
      <div className=" hidden md:block lg:block col-span-1 uppercase" style={{ width: '262px', height: '614px', gap: '32px', opacity: '0px' }}>
        <div className='flex top-6 items-center'>
          <div>
            <FontAwesomeIcon icon={faSliders} className='top-4 mr-2' style={{ width: '18px', height: '16px', border: '1.5px 0px 0px 0px' }} />
          </div>
          <div className='p-30'>
            <h2 className='text-left font-bold' style={{ width: '2px', gap: '0px', opacity: '0px', color: '#121212', fontSize: '16px', fontWeight: '600', lineHeight: '32px' }}>
              filter
            </h2>
          </div>
        </div>
        <section className='w-[262px] h-[264px]' style={{ gap: '16px' }}>
          <div className='list-none'>
            <h2 className='gap-0 text-left font-semibold mt-8' style={{ color: '#121212', width: '218px', height: '26px', fontSize: '16px', lineHeight: '26px' }}>
              CATEGORIES
            </h2>
          </div>
          <div className='list-none'>
            <ul className='gap-60'>
              <li className='mb-2' style={{ height: '22px', border: '0px 0px 1px 0px', gap: '4px', font: 'inter', fontWeight: '600', fontSize: '14px', lineHeight: '22px', color: '#807E7E' }}>All Sound System </li>
              <li className='mb-2' style={{ height: '22px', border: '0px 0px 1px 0px', gap: '4px', font: 'inter', fontWeight: '600', fontSize: '14px', lineHeight: '22px', color: '#807E7E' }}>Accessories </li>
              <li className='mb-2' style={{ height: '22px', border: '0px 0px 1px 0px', gap: '4px', font: 'inter', fontWeight: '600', fontSize: '14px', lineHeight: '22px', color: '#807E7E' }}>Ear Buds </li>
              <li className='mb-2' style={{ height: '22px', border: '0px 0px 1px 0px', gap: '4px', font: 'inter', fontWeight: '600', fontSize: '14px', lineHeight: '22px', color: '#121212' }}>Headsets </li>
              <li className='mb-2' style={{ height: '22px', border: '0px 0px 1px 0px', gap: '4px', font: 'inter', fontWeight: '600', fontSize: '14px', lineHeight: '22px', color: '#807E7E' }}>Speakers</li>
              <li className='mb-2' style={{ height: '22px', border: '0px 0px 1px 0px', gap: '4px', font: 'inter', fontWeight: '600', fontSize: '14px', lineHeight: '22px', color: '#807E7E' }}>Sound bars </li>
            </ul>
          </div>
        </section>
        <section className='capitalize list-none'>
          <div>
            <h2 className='mb-4 mt-2'>price</h2>
          </div>
          <div>
            <h2 className='mb-2'>all price</h2>
            <li className='mb-2' style={{ height: '22px', border: '0px 0px 1px 0px', gap: '4px', font: 'inter', fontWeight: '600', fontSize: '14px', lineHeight: '22px', color: '#807E7E' }}>$100.00 - 200.00</li>
            <li className='mb-2' style={{ height: '22px', border: '0px 0px 1px 0px', gap: '4px', font: 'inter', fontWeight: '600', fontSize: '14px', lineHeight: '22px', color: '#807E7E' }}>$200.00 - 300.00</li>
            <li className='mb-2' style={{ height: '22px', border: '0px 0px 1px 0px', gap: '4px', font: 'inter', fontWeight: '600', fontSize: '14px', lineHeight: '22px', color: '#807E7E' }}>$300.00 - 400.00</li>
            <li className='mb-2' style={{ height: '22px', border: '0px 0px 1px 0px', gap: '4px', font: 'inter', fontWeight: '600', fontSize: '14px', lineHeight: '22px', color: '#807E7E' }}>$400.00 - 500.00</li>
            <li className='mb-2' style={{ height: '22px', border: '0px 0px 1px 0px', gap: '4px', font: 'inter', fontWeight: '600', fontSize: '14px', lineHeight: '22px', color: '#807E7E' }}>$500.00 - 600.00</li>
            <li className='mb-2' style={{ height: '22px', border: '0px 0px 1px 0px', gap: '4px', font: 'inter', fontWeight: '600', fontSize: '14px', lineHeight: '22px', color: '#807E7E' }}>$600.00 +</li>
          </div>
        </section>
      </div>

      <div>
        <div className='flex justify-between capitalize  mb-5' style={{ width: '797px', height: '40px', gap: '419px' }}>
          <div>
            <h2 style={{ width: '82px', height: '32px', fontWeight: "600", lineHeight: '32px', textAlign: 'left', fontSize: '20px' }}>headset</h2>
          </div>
          <div className='flex'>
            <div className='flex'>
              <div>
                <h4 style={{ width: '56px', height: '26px', gap: '0px', fontWeight: '600', fontSize: '16px', lineHeight: '26px' }}>sort by </h4>
              </div>
              <div className='mr-8'>
                <FontAwesomeIcon icon={faCaretDown} />
              
              </div>
            </div>
            <div className=' pb-6'>
              <FontAwesomeIcon icon={faList} className='border p-2 hidden md:block lg:block' style={{width:' 24px', height: '24px', top:'1.5px', left: '1.5px'}} />
              <FontAwesomeIcon icon={faList} className='border p-2 hidden md:block lg:block' style={{width:' 24px', height: '24px', top:'1.5px', left: '1.5px'}} />
              <FontAwesomeIcon icon={faList} className='border p-2'style={{width:' 24px', height: '24px', top:'1.5px', left: '1.5px'}} />
              <FontAwesomeIcon icon={faList} className='border p-2 border-l-2' style={{width:' 24px', height: '24px', top:'1.5px', left: '1.5px', color: '#141718'}} />
            </div>
          </div>
        </div>



        <div className='grid grid-cols-2 lg:grid-cols-3 mb-5 capitalize'>
        {data.map((item) => (
         <>
          <div className='mb-5 w-40  lg:w-full'>
            <img src={`https://api.timbu.cloud/images/${item.photos[0].url}`}alt=""  className='h-[202px] w-[152px] lg:w-[262px] lg:h-[348px]'  />
            <div>
            <h4 className=' text-left' style={{fontFamily: 'inter', fontSize: '16px', fontWeight: '600', lineHeight: '26px', color :'#141718'}}>
                {/* Echo HX */}
                {item.name}
              </h4>
              <p style={{fontFamily: 'inter', fontSize: '14px', fontWeight: '600', lineHeight: '22px', textAlign: 'left'}}>
                {/* $549.00 */}
                ${item.current_price[0]?.USD[0]}
              </p>
              
            </div>
          </div>
          {/* <div className=' ml-16 w-40 h-10 lg:w-full lg:ml-0'>
            <img src={picten} alt="" className='h-[202px] w-[152px] lg:w-[262px] lg:h-[348px]'/>
            <div>
            <h4 className=' text-left' style={{fontFamily: 'inter', fontSize: '16px', fontWeight: '600', lineHeight: '26px', color :'#141718'}}>
                echo 89
              </h4>
              <p style={{fontFamily: 'inter', fontSize: '14px', fontWeight: '600', lineHeight: '22px', textAlign: 'left'}}>
                $560.00
              </p>
            </div>
          </div>
          <div className='w-40 lg:w-full '>
            <img src={Pictureeight} alt=""  className='h-[202px] w-[152px] lg:w-[262px] lg:h-[348px]' />
            <div>
            <h4 className=' text-left' style={{fontFamily: 'inter', fontSize: '16px', fontWeight: '600', lineHeight: '26px', color :'#141718'}}>
                echo H95
                </h4>
                <p style={{fontFamily: 'inter', fontSize: '14px', fontWeight: '600', lineHeight: '22px', textAlign: 'left'}}>
                $540.00
              </p>
            </div>
          </div> */}
          </>
        
      ))}

        <div className="flex justify-center items-center w-full mt-20">
        <button className="text-center items-center py-2 px-4 bg-white text-[#141718] rounded border-[#141718] border-2 "  style={{width: ' Hug (163px)px', height:' Hug (40px)px', padding: '6px 40px 6px 40px', gap: '8px', border: '  1px-solid-green ', border: '1px 0px 0px 0px', opacity: '0px'}}>
          <h3 style={{width: '83px', height: '28px', gap: '0px', fontFamily: 'inter', fontSize: '16px', fontWeight: '500', lineHeight :'28px', letterSpacing: '-0.4000000059604645px', textAlign: 'center'}}>Show More</h3>
        </button>
      </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Item;

