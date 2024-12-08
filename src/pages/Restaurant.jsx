import { useState, useEffect, useRef } from "react";
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
import apiClient from "../utils/apiClient";
import Information from "../components/RestaurantComponents/Information/Information";
import Map from "../components/RestaurantComponents/Map/Map";
import PopularRestaurants from "../components/PopularRestaurants/PopularRestaurants";
import Reviews from "../components/RestaurantComponents/Reviews/Reviews";

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
  const showCart = useSelector((state) => state.cart.showCart);
  const cartRef = useRef(null);

  useEffect(() => {
    if (showCart && cartRef.current) {
      cartRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [showCart]);

  const [productData, setProductData] = useState();

  useEffect(() => {
    apiClient
      .get("/product-page/data")
      .then((response) => setProductData(response.data))
      .catch((error) => console.error("Error fetching home page data", error));
  }, []);

  const dispatch = useDispatch();
  const { selectedRestaurant } = useSelector((state) => state.restaurants);
  const { restaurantSlug } = useParams();
  // const { items } = useSelector((state) => state.cart);
  // useEffect(() => {
  //   console.log(items);
  // }, [items]);
  useEffect(() => {
    if (!selectedRestaurant && restaurantSlug) {
      dispatch(getOneRestaurant(restaurantSlug));
    }
  }, [dispatch, selectedRestaurant, restaurantSlug]);

  return (
    <div className="restaurant">
      <Navbar />
      <RestaurantBanner />
      <TitleBar
        title={`All Offers from ${selectedRestaurant?.restaurant_name}`}
      >
        <SearchBar />
      </TitleBar>
      <RestaurantNavbar />
      <div
        className="restaurant-main-content"
        style={{
          gridTemplateColumns: showCart ? "1fr 27%" : "1fr",
        }}
      >
        <RestaurantItems
          offers={productData?.offers}
          categories={productData?.categories}
        />
        {showCart && (
          <div ref={cartRef} className="cart-wrapper">
            <Cart />
          </div>
        )}
      </div>
      <Information />
      <Map />
      <Reviews reviews={productData?.reviews} />
      <TitleBar title="Similar Restaurants" />
      <PopularRestaurants />
      <div style={{ width: "100%", paddingBottom: "100px" }}></div>
      <Footer />
    </div>
  );
}

export default Restaurant;
