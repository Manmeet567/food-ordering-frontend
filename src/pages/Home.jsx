import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HomeBanner from "../components/Home/HomeBanner/HomeBanner";
import TitleBar from "../components/TitleBar/TitleBar";
import apiClient from "../utils/apiClient";
import DealsAndDiscount from "../components/DealsAndDiscount/DealsAndDiscount";
import PopularCategories from "../components/Home/PopularCategories/PopularCategories";
import PopularRestaurants from "../components/PopularRestaurants/PopularRestaurants";
import Opportunities from "../components/Home/Opportunities/Opportunities";
import KnowMoreAboutUs from "../components/Home/KnowMoreAboutUs/KnowMoreAboutUs";
import InfoBar from "../components/Home/InfoBar/InfoBar";


function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const [homeData, setHomeData] = useState({
    deals: [
      {
        _id: "674076db99ed6dc26a92a2d0",
        deal_discount: 40,
        deal_restaurant: "Chef Burgers London",
        deal_img:
          "https://res.cloudinary.com/dianvv6lu/image/upload/v1732185751/Rectangle_8_ahmfir.png",
      },
      {
        _id: "6740775499ed6dc26a92a2d1",
        deal_discount: 20,
        deal_restaurant: "Grand Ai Cafe London",
        deal_img:
          "https://res.cloudinary.com/dianvv6lu/image/upload/v1732185815/Rectangle_8_1_xi49r5.png",
      },
      {
        _id: "674077c499ed6dc26a92a2d3",
        deal_discount: 17,
        deal_restaurant: "Butterbrot Caf’e London",
        deal_img:
          "https://res.cloudinary.com/dianvv6lu/image/upload/v1732185751/Rectangle_8_ahmfir.png",
      },
    ],
    popularCategories: [
      {
          "_id": "6740789199ed6dc26a92a2d4",
          "popular_item": "Burgers & Fast food",
          "popular_restaurants_count": 21,
          "img": "https://res.cloudinary.com/dianvv6lu/image/upload/v1732186167/Rectangle_17_l01z69.png"
      },
      {
          "_id": "674078ea99ed6dc26a92a2d5",
          "popular_item": "Salads",
          "popular_restaurants_count": 32,
          "img": "https://res.cloudinary.com/dianvv6lu/image/upload/v1732186168/Rectangle_15_brnmmh.png"
      },
      {
          "_id": "6740793499ed6dc26a92a2d6",
          "popular_item": "Pasta & Casuals",
          "popular_restaurants_count": 4,
          "img": "https://res.cloudinary.com/dianvv6lu/image/upload/v1732186167/Rectangle_13_poa7fu.png"
      },
      {
          "_id": "674079b899ed6dc26a92a2d8",
          "popular_item": "Pizza",
          "popular_restaurants_count": 33,
          "img": "https://res.cloudinary.com/dianvv6lu/image/upload/v1732186167/Rectangle_19_y2974s.png"
      },
      {
          "_id": "67407a2999ed6dc26a92a2d9",
          "popular_item": "Breakfast",
          "popular_restaurants_count": 4,
          "img": "https://res.cloudinary.com/dianvv6lu/image/upload/v1732186167/Rectangle_21_atop0v.png"
      },
      {
          "_id": "67407a6999ed6dc26a92a2da",
          "popular_item": "Soups",
          "popular_restaurants_count": 32,
          "img": "https://res.cloudinary.com/dianvv6lu/image/upload/v1732186167/Rectangle_23_ivqbnm.png"
      }
  ],
    opportunities: [
      {
        _id: "67407aec99ed6dc26a92a2db",
        tagline: "Earn more with lower fees",
        opportunity: "Signup as a business",
        title: "Partner with us",
        img: "https://res.cloudinary.com/dianvv6lu/image/upload/v1732188113/Rectangle_8_gxlzgy.png",
      },
      {
        _id: "67407b7c99ed6dc26a92a2dc",
        tagline: "Avail exclusive perks",
        opportunity: "Signup as a rider",
        title: "Ride with us",
        img: "https://res.cloudinary.com/dianvv6lu/image/upload/v1732188112/Rectangle_8_1_lk1v2p.png",
      },
    ],
  });

  // useEffect(() => {
  //   apiClient
  //     .get("/home-page/data")
  //     .then((response) => setHomeData(response.data))
  //     .catch((error) => console.error("Error fetching home page data", error));
  // }, []);

  const SmallNavbar = () => {
    const [activeItem, setActiveItem] = useState("Pizza & Fast food");

    const handleItemClick = (item) => {
      setActiveItem(item);
    };

    return (
      <nav>
        <ul className="tb-sm-list">
          {["Vegan", "Sushi", "Pizza & Fast food", "Others"].map((item) => (
            <li
              key={item}
              className={activeItem === item ? "tb-sm-active" : ""}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    );
  };


  return (
      <div className="home">
        <Navbar />
        <HomeBanner />
        <TitleBar title="Up to -40% 🎊 Order.uk exclusive deals">
          <SmallNavbar />
        </TitleBar>
        <DealsAndDiscount data={homeData?.deals} showButton={false} />
        <TitleBar title="Order.uk Popular Categories 🤩" />
        <PopularCategories data={homeData?.popularCategories} />
        <TitleBar title="Popular Restaurants" />
        <PopularRestaurants />
        <div className="home-page-banner">
          <div className="hpb-container">
            <img src="https://res.cloudinary.com/dianvv6lu/image/upload/v1732186566/Ordering_APP_khkyu9.png" alt="banner" />
          </div>
        </div>
        <Opportunities opdata = {homeData?.opportunities} />
        <KnowMoreAboutUs />
        <InfoBar />
        {/* <nav>
          <ul>
            <li>
              <Link to="/payment-page">Payment Page</Link>
            </li>
          </ul>
        </nav>
        <button onClick={handleLogout} style={{ marginTop: "20px" }}>
          Logout
        </button> */}
        <Footer />
      </div>
  );
}

export default Home;
