import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';


function PaymentPage() {
  return (
    <div className='payment-page'>
      <Navbar />

      PaymentPage
      <nav>
        <ul>
          <li>
            <Link to="/restaurant/restaurant_name">Restaurant</Link>
          </li>
          <li>
            <Link to="/your-address">Your Address</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/order-successful">Order Successful</Link>
          </li>
          <li>
            <Link to="/your-profile">Your Profile</Link>
          </li>
        </ul>
      </nav>

      <Footer />
    </div>
  )
}

export default PaymentPage