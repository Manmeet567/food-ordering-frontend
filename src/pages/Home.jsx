import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HomeBanner from "../components/Banner/HomeBanner";
import TitleBar from "../components/TitleBar/TitleBar";
import { createContext, useContext } from "react";
import apiClient from "../utils/apiClient";
import DealsAndDiscount from "../components/DealsAndDiscount/DealsAndDiscount";

const HomeDataContext = createContext(null);

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const [homeData, setHomeData] = useState({
    restaurants: [
      {
        _id: "67403bca3a84cdd7e4d4968b",
        restaurant_name: "McDonald’s London",
        restaurant_img:
          "https://res.cloudinary.com/dianvv6lu/image/upload/v1732186341/Rectangle_13_uzuxj0.png",
        __v: 0,
      },
      {
        _id: "67403c143a84cdd7e4d4968d",
        restaurant_name: "Papa Johns",
        restaurant_img:
          "https://res.cloudinary.com/dianvv6lu/image/upload/v1732186341/Rectangle_13_1_ldnyvy.png",
        __v: 0,
      },
      {
        _id: "67403c3a3a84cdd7e4d4968f",
        restaurant_name: "KFC West London",
        restaurant_img:
          "https://res.cloudinary.com/dianvv6lu/image/upload/v1732186341/Rectangle_13_2_o8cc9n.png",
        __v: 0,
      },
      {
        _id: "67403c5d3a84cdd7e4d49691",
        restaurant_name: "Texas Chicken",
        restaurant_img:
          "https://res.cloudinary.com/dianvv6lu/image/upload/v1732186341/Rectangle_13_3_lx4gvt.png",
        __v: 0,
      },
      {
        _id: "67403c853a84cdd7e4d49693",
        restaurant_name: "Burger King",
        restaurant_img:
          "https://res.cloudinary.com/dianvv6lu/image/upload/v1732186341/Rectangle_13_4_tamffn.png",
        __v: 0,
      },
      {
        _id: "67403caa3a84cdd7e4d49695",
        restaurant_name: "Shaurma 1",
        restaurant_img:
          "https://res.cloudinary.com/dianvv6lu/image/upload/v1732186340/Rectangle_13_5_fhaldo.png",
        __v: 0,
      },
    ],
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
    popularCategories: [],
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

  // const homeData = useContext(HomeDataContext); this is how to get home data in another component

  return (
    <HomeDataContext.Provider value={homeData}>
      <div className="home">
        <Navbar />
        <HomeBanner />
        <TitleBar title="Up to -40% 🎊 Order.uk exclusive deals">
          <SmallNavbar />
        </TitleBar>
        <DealsAndDiscount data={homeData?.deals} showButton={false} />
        <TitleBar title="Order.uk Popular Categories 🤩" />
        <nav>
          <ul>
            <li>
              <Link to="/payment-page">Payment Page</Link>
            </li>
          </ul>
        </nav>
        <button onClick={handleLogout} style={{ marginTop: "20px" }}>
          Logout
        </button>
        <Footer />
      </div>
    </HomeDataContext.Provider>
  );
}

export default Home;
