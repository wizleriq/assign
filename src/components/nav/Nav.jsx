import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../../home/Home';
import Product from '../product/Product';
import Item from '../item/Item';
import News from '../news/News';
import Footer from '../footer/Footer';

const Nav= () => {
  return (
    <div>
      <Product />
      <Home />
      <Item />
      <News />
      <Footer /> 
   </div>
  );
}

export default Nav;
