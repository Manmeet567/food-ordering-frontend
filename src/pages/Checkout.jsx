import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import PopularRestaurants from '../components/PopularRestaurants/PopularRestaurants'
import TitleBar from '../components/TitleBar/TitleBar'
import MainCheckout from '../components/CheckoutComponents/Checkout/MainCheckout'

function Checkout() {
  return (
    <div className='checkout'>
      <Navbar />
      <MainCheckout />
      <TitleBar title="Similar Restaurants" />
      <PopularRestaurants />
      <div style={{paddingBottom:"100px"}}></div>
      <Footer />
    </div>
  )
}

export default Checkout