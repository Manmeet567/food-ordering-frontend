import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';  // Import the logout action

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logout());
    // Redirect the user to the login page
    navigate('/login');
  };

  return (
    <div>
      <h1>Home</h1>
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
      <button onClick={handleLogout} style={{ marginTop: '20px' }}>
        Logout
      </button>
    </div>
  );
}

export default Home;
