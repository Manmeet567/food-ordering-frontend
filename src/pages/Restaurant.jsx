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

  const [productData, setProductData] = useState({
    offers: [
      {
        _id: "67407ce699ed6dc26a92a2e0",
        offer_discount: 20,
        offer: "First Order Discount",
        offer_restaurant: "McDonald’s East London",
        img: "https://res.cloudinary.com/dianvv6lu/image/upload/v1732188710/Rectangle_8_2_eyd7im.png",
      },
      {
        _id: "67407d4599ed6dc26a92a2e2",
        offer_discount: 20,
        offer: "Vegan Discount",
        offer_restaurant: "McDonald’s East London",
        img: "https://res.cloudinary.com/dianvv6lu/image/upload/v1732188710/Rectangle_8_3_bc02ky.png",
      },
      {
        _id: "67407d8499ed6dc26a92a2e3",
        offer_discount: 100,
        offer: "Free ice Cream Offer",
        offer_restaurant: "McDonald’s East London",
        img: "https://res.cloudinary.com/dianvv6lu/image/upload/v1732188709/Rectangle_8_4_taibwz.png",
      },
    ],
    categories: [
      {
        _id: "674ecbdfdd3f1987e52c2094",
        category_name: "Burgers",
        meals: [
          {
            _id: "674ecbdedd3f1987e52c208c",
            meal_name: "Royal Cheese Burger with extra Fries",
            meal_desc:
              "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
            meal_price: 120,
            meal_img:
              "https://res.cloudinary.com/dianvv6lu/image/upload/v1732188968/Rectangle_46_krhuyg.png",
            createdAt: "2024-12-03T09:14:06.945Z",
            updatedAt: "2024-12-03T09:14:06.945Z",
            __v: 0,
          },
          {
            _id: "674ecbdedd3f1987e52c208d",
            meal_name: "The classics for 3",
            meal_desc:
              "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
            meal_price: 240,
            meal_img:
              "https://res.cloudinary.com/dianvv6lu/image/upload/v1732188968/Rectangle_46_1_qkh6d7.png",
            createdAt: "2024-12-03T09:14:07.199Z",
            updatedAt: "2024-12-03T09:14:07.199Z",
            __v: 0,
          },
          {
            _id: "674ecbdedd3f1987e52c208e",
            meal_name: "The classics for 3",
            meal_desc:
              "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
            meal_price: 180,
            meal_img:
              "https://res.cloudinary.com/dianvv6lu/image/upload/v1732188968/Rectangle_46_2_vn8mht.png",
            createdAt: "2024-12-03T09:14:07.446Z",
            updatedAt: "2024-12-03T09:14:07.446Z",
            __v: 0,
          },
          {
            _id: "674ecbdedd3f1987e52c208f",
            meal_name: "The classics for 3",
            meal_desc:
              "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
            meal_price: 280,
            meal_img:
              "https://res.cloudinary.com/dianvv6lu/image/upload/v1732188967/Rectangle_46_3_ytj7pg.png",
            createdAt: "2024-12-03T09:14:07.721Z",
            updatedAt: "2024-12-03T09:14:07.721Z",
            __v: 0,
          },
        ],
        createdAt: "2024-12-03T09:14:07.971Z",
        updatedAt: "2024-12-03T09:14:07.971Z",
        __v: 0,
      },
      {
        _id: "674ed149d8c982ec18486acf",
        category_name: "Fries",
        meals: [
          {
            _id: "674ed148d8c982ec18486ac7",
            meal_name: "Royal Cheese Burger with extra Fries",
            meal_desc:
              "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
            meal_price: 120,
            meal_img:
              "https://res.cloudinary.com/dianvv6lu/image/upload/v1732189197/Rectangle_46_4_ge1xye.png",
            createdAt: "2024-12-03T09:37:12.727Z",
            updatedAt: "2024-12-03T09:37:12.727Z",
            __v: 0,
          },
          {
            _id: "674ed148d8c982ec18486ac8",
            meal_name: "The classics for 3",
            meal_desc:
              "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
            meal_price: 280,
            meal_img:
              "https://res.cloudinary.com/dianvv6lu/image/upload/v1732189197/Rectangle_46_diwnon.png",
            createdAt: "2024-12-03T09:37:12.988Z",
            updatedAt: "2024-12-03T09:37:12.988Z",
            __v: 0,
          },
          {
            _id: "674ed148d8c982ec18486ac9",
            meal_name: "The classics for 3",
            meal_desc:
              "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
            meal_price: 320,
            meal_img:
              "https://res.cloudinary.com/dianvv6lu/image/upload/v1732189196/Rectangle_46_1_xe8jzm.png",
            createdAt: "2024-12-03T09:37:13.243Z",
            updatedAt: "2024-12-03T09:37:13.243Z",
            __v: 0,
          },
          {
            _id: "674ed148d8c982ec18486aca",
            meal_name: "The classics for 3",
            meal_desc:
              "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
            meal_price: 400,
            meal_img:
              "https://res.cloudinary.com/dianvv6lu/image/upload/v1732189196/Rectangle_46_2_blc2gh.png",
            createdAt: "2024-12-03T09:37:13.499Z",
            updatedAt: "2024-12-03T09:37:13.499Z",
            __v: 0,
          },
        ],
        createdAt: "2024-12-03T09:37:13.757Z",
        updatedAt: "2024-12-03T09:37:13.757Z",
        __v: 0,
      },
      {
        _id: "674ed1d7245cf643c698ba8c",
        category_name: "Cold Drinks",
        meals: [
          {
            _id: "674ed1d6245cf643c698ba84",
            meal_name: "Royal Cheese Burger with extra Fries",
            meal_desc:
              "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
            meal_price: 70,
            meal_img:
              "https://res.cloudinary.com/dianvv6lu/image/upload/v1732189338/Rectangle_46_3_gbybrp.png",
            createdAt: "2024-12-03T09:39:34.570Z",
            updatedAt: "2024-12-03T09:39:34.570Z",
            __v: 0,
          },
          {
            _id: "674ed1d6245cf643c698ba85",
            meal_name: "The classics for 3",
            meal_desc:
              "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
            meal_price: 90,
            meal_img:
              "https://res.cloudinary.com/dianvv6lu/image/upload/v1732189335/Rectangle_46_cn8ob2.png",
            createdAt: "2024-12-03T09:39:34.841Z",
            updatedAt: "2024-12-03T09:39:34.841Z",
            __v: 0,
          },
          {
            _id: "674ed1d6245cf643c698ba86",
            meal_name: "The classics for 3",
            meal_desc:
              "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
            meal_price: 120,
            meal_img:
              "https://res.cloudinary.com/dianvv6lu/image/upload/v1732189335/Rectangle_46_1_z9qwy6.png",
            createdAt: "2024-12-03T09:39:35.101Z",
            updatedAt: "2024-12-03T09:39:35.101Z",
            __v: 0,
          },
          {
            _id: "674ed1d6245cf643c698ba87",
            meal_name: "The classics for 3",
            meal_desc:
              "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
            meal_price: 150,
            meal_img:
              "https://res.cloudinary.com/dianvv6lu/image/upload/v1732189335/Rectangle_46_2_za4oxt.png",
            createdAt: "2024-12-03T09:39:35.361Z",
            updatedAt: "2024-12-03T09:39:35.361Z",
            __v: 0,
          },
        ],
        createdAt: "2024-12-03T09:39:35.623Z",
        updatedAt: "2024-12-03T09:39:35.623Z",
        __v: 0,
      },
    ],
    reviews: [
      {
        _id: "674174ca3f0ed9ab7f98374a",
        customer_name: "St Glx",
        customer_city: "South London",
        rating: 5,
        review:
          "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
        review_date: "24th September, 2023",
        customer_img:
          "https://res.cloudinary.com/dianvv6lu/image/upload/v1732196263/cfffaae581d294e098c6e189e54be2b3_uarvoq.png",
      },
      {
        _id: "674174ca3f0ed9ab7f98374a",
        customer_name: "St Glx",
        customer_city: "South London",
        rating: 5,
        review:
          "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
        review_date: "24th September, 2023",
        customer_img:
          "https://res.cloudinary.com/dianvv6lu/image/upload/v1732196263/cfffaae581d294e098c6e189e54be2b3_uarvoq.png",
      },
      {
        _id: "674174ca3f0ed9ab7f98374a",
        customer_name: "St Glx",
        customer_city: "South London",
        rating: 5,
        review:
          "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
        review_date: "24th September, 2023",
        customer_img:
          "https://res.cloudinary.com/dianvv6lu/image/upload/v1732196263/cfffaae581d294e098c6e189e54be2b3_uarvoq.png",
      },
      {
        _id: "674174ca3f0ed9ab7f98374a",
        customer_name: "St Glx",
        customer_city: "South London",
        rating: 5,
        review:
          "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
        review_date: "24th September, 2023",
        customer_img:
          "https://res.cloudinary.com/dianvv6lu/image/upload/v1732196263/cfffaae581d294e098c6e189e54be2b3_uarvoq.png",
      }
    ],
  });

  //  useEffect(() => {
  //   apiClient
  //     .get("/product-page/data")
  //     .then((response) => setProductData(response.data))
  //     .catch((error) => console.error("Error fetching home page data", error));
  // }, []);

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
          <div ref={cartRef}>
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
