import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import RestaurantBanner from "../components/RestaurantComponents/RestaurantBanner/RestaurantBanner";
import TitleBar from "../components/TitleBar/TitleBar";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import search from "../assets/Search More.png";
import RestaurantNavbar from "../components/RestaurantComponents/RestaurantNavbar/RestaurantNavbar";
import RestaurantItems from "../components/RestaurantComponents/RestaurantItems/RestaurantItems";
import Cart from "../components/RestaurantComponents/Cart/Cart";
import { getOneRestaurant } from "../redux/slices/restaurantsSlice";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="tb-sm-sb">
      <img src={search} alt="search" />
      <input
        type="text"
        placeholder="Search from menu..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

function Restaurant() {
  const dispatch = useDispatch();
  const { selectedRestaurant } = useSelector((state) => state.restaurants);
  const { restaurantSlug } = useParams();

  useEffect(() => {
    if (!selectedRestaurant && restaurantSlug) {
      dispatch(getOneRestaurant(restaurantSlug));
    }
  }, [dispatch, selectedRestaurant, restaurantSlug]);

  return (
    <div className="restaurant">
      <Navbar />
      <RestaurantBanner />
      <TitleBar title={`All Offers from ${selectedRestaurant?.restaurant_name}`}>
        <SearchBar />
      </TitleBar>
      <RestaurantNavbar />
      <div className="restaurant-main-content">
        <RestaurantItems />
        <Cart />
      </div>
      <Footer />
    </div>
  );
}

export default Restaurant;
