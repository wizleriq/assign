import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <section className='lg:flex hidden capitalize text-center items-center mr-40 ml-40'>
      <div className='flex'>
        <div className='mr-3'>
          <h2>home <FontAwesomeIcon icon={faCaretRight} /></h2>
        </div>
        <div>
          <h2>product</h2>
        </div>
      </div>
    </section>
  );
}

export default Home;
