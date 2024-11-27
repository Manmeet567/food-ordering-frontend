import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "../../redux/slices/restaurantsSlice";
import "./PopularRestaurants.css";

function PopularRestaurants() {
  const dispatch = useDispatch();
  const { restaurants, loading, error } = useSelector(
    (state) => state.restaurants
  );

  useEffect(() => {
    if (restaurants.length === 0) {
      dispatch(fetchRestaurants()); // Fetch restaurants if not already in state
    }
  }, [dispatch, restaurants]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="popular-restaurants">
      <div className="pr-container">
        {restaurants.map((restaurant) => (
          <div key={restaurant._id} className="pr-card">
            <img src={restaurant.restaurant_img} alt="img" />
            <div>
              <p>{restaurant.restaurant_name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularRestaurants;
