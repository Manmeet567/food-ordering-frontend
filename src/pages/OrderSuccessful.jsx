import React from 'react'
import { Link } from 'react-router-dom';


function OrderSuccessful() {
  return (
    <div>OrderSuccessful
      <nav>
        <ul>
          <li>
            <Link to="/restaurant/restaurant_name">Restaurant</Link>
          </li>
          <li>
            <Link to="/your-address">Your Address</Link>
          </li>
          <li>
            <Link to="/payment-page">Payment Page</Link>
          </li>
          <li>
            <Link to="/order-successful">Order Successful</Link>
          </li>
          <li>
            <Link to="/your-profile">Your Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default OrderSuccessful