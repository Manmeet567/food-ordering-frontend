import React, { useRef } from "react";
import "./Reviews.css";
import forward from "../../../assets/forward.png";
import back from "../../../assets/Back.png";
import ReactStars from "react-stars";
import timespan from "../../../assets/Time Span.png";

function Reviews({ reviews }) {
  const reviewsContainerRef = useRef(null); // Create a ref for the scrollable container

  const scrollLeft = () => {
    if (reviewsContainerRef.current) {
      reviewsContainerRef.current.scrollBy({ left: -450, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (reviewsContainerRef.current) {
      reviewsContainerRef.current.scrollBy({ left: 450, behavior: "smooth" });
    }
  };

  return (
    <div className="reviews">
      <div className="reviews-container">
        <div className="rc-header">
          <p>Customer Reviews</p>
          <div className="rch-btns">
            <button onClick={scrollLeft}>
              <img src={back} alt="back" />
            </button>
            <button onClick={scrollRight}>
              <img src={forward} alt="forward" />
            </button>
          </div>
        </div>
        <div className="rc-main-content" ref={reviewsContainerRef}>
          {reviews?.map((review) => (
            <div className="rcmc-card" key={review?._id}>
              <div className="rcmc-header">
                <div className="rcmc-img-section">
                  <img src={review?.customer_img} alt="profile" />
                  <div className="rcmc-line"></div>
                  <div className="rcmc-about">
                    <p>{review?.customer_name}</p>
                    <p>{review?.customer_city}</p>
                  </div>
                </div>
                <div className="rcmc-stars-time">
                  <ReactStars
                    count={5}
                    value={review?.rating}
                    size={16}
                    color2={"#FC8A06"}
                    edit={false}
                  />
                  <div className="rcmc-time">
                    <img src={timespan} alt="clock" />
                    <p>{review?.review_date}</p>
                  </div>
                </div>
              </div>
              <div className="rcmc-review">
                <p>{review?.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="review-rating-card">
        <p>3.5</p>
        <ReactStars
          count={5}
          value={3.5}
          size={18}
          color2={"#ffd700"}
          edit={false}
        />
        <p>1,360 reviews</p>
      </div>
    </div>
  );
}

export default Reviews;
