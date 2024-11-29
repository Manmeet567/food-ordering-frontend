import {useState} from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import RestaurantBanner from "../components/RestaurantComponents/RestaurantBanner/RestaurantBanner";
import TitleBar from "../components/TitleBar/TitleBar";
import { useLocation } from "react-router-dom";
import search from "../assets/Search More.png";

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
  const location = useLocation();
  const { restaurantName } = location.state || {};

  return (
    <div className="restaurant">
      <Navbar />
      <RestaurantBanner />
      <TitleBar title={`All Offers from ${restaurantName}`}>
        <SearchBar />
      </TitleBar>
      <Footer />
    </div>
  );
}

export default Restaurant;
