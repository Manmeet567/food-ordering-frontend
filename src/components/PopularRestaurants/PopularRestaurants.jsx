import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "../../redux/slices/restaurantsSlice";
import "./PopularRestaurants.css";
import { Link, useLocation } from "react-router-dom";
import { setSelectedRestaurant } from "../../redux/slices/restaurantsSlice";

function PopularRestaurants() {
  const dispatch = useDispatch();
  const { restaurants, loading, error } = useSelector(
    (state) => state.restaurants
  );
  
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]);

  useEffect(() => {
    if (restaurants.length === 0) {
      dispatch(fetchRestaurants());
    }
  }, [dispatch, restaurants]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleRestaurantClick = (restaurant) => {
    dispatch(setSelectedRestaurant(restaurant));
  };

  return (
    <div className="popular-restaurants">
      <div className="pr-container">
        {restaurants.map((restaurant) => (
          <Link
            to={`/restaurant/${restaurant?.restaurant_slug}`}
            onClick={() => handleRestaurantClick(restaurant)}
            key={restaurant?._id}
          >
            <div className="pr-card">
              <img src={restaurant?.restaurant_img} alt="img" />
              <div>
                <p>{restaurant?.restaurant_name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PopularRestaurants;
