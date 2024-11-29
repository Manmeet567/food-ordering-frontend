import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import RestaurantBanner from '../components/RestaurantComponents/RestaurantBanner/RestaurantBanner';
import TitleBar from '../components/TitleBar/TitleBar';
import { useLocation } from "react-router-dom";


function Restaurant() {
  const location = useLocation();
  const { restaurantName } = location.state || {};

  return (
    <div className='restaurant'>
      <Navbar />
      <RestaurantBanner />
      <TitleBar title={`All Offers from ${restaurantName}`} />
      <Footer />
    </div>
  )
}

export default Restaurant