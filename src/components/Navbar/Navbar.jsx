import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setActiveLink } from "../../redux/slices/navSlice";
import Location from "../../assets/Location.png";
import basket from "../../assets/Full Shopping Basket.png";
import downArrow from "../../assets/Down Arrow.png";
import Logo from "../../assets/logo.png";
import userpic from "../../assets/Male User.png";
import "./Navbar.css";

function Navbar() {
  const dispatch = useDispatch();
  const { activeLink } = useSelector((state) => state.navbar);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log(user)
  }, [user])

  const handleSetActive = (link) => {
    dispatch(setActiveLink(link));
  };

  return (
    <div className="navbar">
      <div className="sub-navbar">
        <div className="sn-container">
          <div className="sn-first">
            <span>🌟</span>
            <span>
              {" "}
              Get 5% Off your first order, <a href="#">Promo: ORDER5</a>
            </span>
          </div>
          <div className="sn-second">
            <div className="location-info">
              <img src={Location} alt="location" />
              <span>Regent Street, A4, A4201, London</span>
              <Link to="/your-address">Change Location</Link>
            </div>
            <div className="sn-cart">
              <div className="snc-first">
                <img src={basket} alt="basket" />
                <span>My Cart</span>
              </div>
              <div></div>
              <div className="snc-btn">
                <img src={downArrow} alt="btn" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-navbar">
        <div className="mn-container">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <div className="mn-options">
            <Link
              to="/"
              className={activeLink === "Home" ? "active" : ""}
              onClick={() => handleSetActive("Home")}
            >
              Home
            </Link>
            <a
              href="#"
              className={activeLink === "Browse Menu" ? "active" : ""}
              onClick={() => handleSetActive("Browse Menu")}
            >
              Browse Menu
            </a>
            <a
              href="#"
              className={activeLink === "Special Offers" ? "active" : ""}
              onClick={() => handleSetActive("Special Offers")}
            >
              Special Offers
            </a>
            <a
              href="#"
              className={activeLink === "Restaurants" ? "active" : ""}
              onClick={() => handleSetActive("Restaurants")}
            >
              Restaurants
            </a>
            <a
              href="#"
              className={activeLink === "Track Order" ? "active" : ""}
              onClick={() => handleSetActive("Track Order")}
            >
              Track Order
            </a>

            {/* Check if user is logged in and display their name */}
            <Link to="/your-profile" className="mn-your-profile">
              <img src={userpic} alt="user" />
              <span>
                {user && user.name ? `Hey, ${user.name}` : "Login/Signup"}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
