import { useEffect, useState } from "react";
import DealsAndDiscount from "../../DealsAndDiscount/DealsAndDiscount";
import apiClient from "../../../utils/apiClient";

function RestaurantItems() {
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
        _id: "674045a3fd731fd0788d9a8c",
        category_name: "Burgers",
        meals: [
          {
            meal_name: "Royal Cheese Burger with extra Fries",
            meal_desc:
              "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
            meal_price: 120,
            meal_img:
              "https://res.cloudinary.com/dianvv6lu/image/upload/v1732188968/Rectangle_46_krhuyg.png",
            _id: "674045a3fd731fd0788d9a8d",
          },
          {
            meal_name: "The classics for 3",
            meal_desc:
              "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
            meal_price: 240,
            meal_img:
              "https://res.cloudinary.com/dianvv6lu/image/upload/v1732188968/Rectangle_46_1_qkh6d7.png",
            _id: "674045a3fd731fd0788d9a8e",
          },
          {
            meal_name: "The classics for 3",
            meal_desc:
              "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
            meal_price: 180,
            meal_img:
              "https://res.cloudinary.com/dianvv6lu/image/upload/v1732188968/Rectangle_46_2_vn8mht.png",
            _id: "674045a3fd731fd0788d9a8f",
          },
          {
            meal_name: "The classics for 3",
            meal_desc:
              "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
            meal_price: 280,
            meal_img:
              "https://res.cloudinary.com/dianvv6lu/image/upload/v1732188967/Rectangle_46_3_ytj7pg.png",
            _id: "674045a3fd731fd0788d9a90",
          },
        ],
        __v: 0,
      },
      {
        _id: "674045a3fd731fd0788d9a91",
        category_name: "Fries",
        meals: [
          {
            meal_name: "Royal Cheese Burger with extra Fries",
            meal_desc:
              "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
            meal_price: 120,
            meal_img:
              "https://res.cloudinary.com/dianvv6lu/image/upload/v1732189197/Rectangle_46_4_ge1xye.png",
            _id: "674045a3fd731fd0788d9a92",
          },
          {
            meal_name: "The classics for 3",
            meal_desc:
              "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
            meal_price: 280,
            meal_img:
              "https://res.cloudinary.com/dianvv6lu/image/upload/v1732189197/Rectangle_46_diwnon.png",
            _id: "674045a3fd731fd0788d9a93",
          },
          {
            meal_name: "The classics for 3",
            meal_desc:
              "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
            meal_price: 320,
            meal_img:
              "https://res.cloudinary.com/dianvv6lu/image/upload/v1732189196/Rectangle_46_1_xe8jzm.png",
            _id: "674045a3fd731fd0788d9a94",
          },
          {
            meal_name: "The classics for 3",
            meal_desc:
              "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
            meal_price: 400,
            meal_img:
              "https://res.cloudinary.com/dianvv6lu/image/upload/v1732189196/Rectangle_46_2_blc2gh.png",
            _id: "674045a3fd731fd0788d9a95",
          },
        ],
        __v: 0,
      },
      {
        _id: "6749a04fedd5652f89fc5ab1",
        category_name: "Cold Drinks",
        meals: [
          {
            meal_name: "Royal Cheese Burger with extra Fries",
            meal_desc:
              "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
            meal_price: 70,
            meal_img:
              "https://res.cloudinary.com/dianvv6lu/image/upload/v1732189338/Rectangle_46_3_gbybrp.png",
            _id: "674045a3fd731fd0788d9a97",
          },
          {
            meal_name: "The classics for 3",
            meal_desc:
              "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
            meal_price: 90,
            meal_img:
              "https://res.cloudinary.com/dianvv6lu/image/upload/v1732189335/Rectangle_46_cn8ob2.png",
            _id: "674045a3fd731fd0788d9a98",
          },
          {
            meal_name: "The classics for 3",
            meal_desc:
              "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
            meal_price: 120,
            meal_img:
              "https://res.cloudinary.com/dianvv6lu/image/upload/v1732189335/Rectangle_46_1_z9qwy6.png",
            _id: "674045a3fd731fd0788d9a99",
          },
          {
            meal_name: "The classics for 3",
            meal_desc:
              "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
            meal_price: 150,
            meal_img:
              "https://res.cloudinary.com/dianvv6lu/image/upload/v1732189335/Rectangle_46_2_za4oxt.png",
            _id: "674045a3fd731fd0788d9a9a",
          },
        ],
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
      },
    ],
  });

  //  useEffect(() => {
  //   apiClient
  //     .get("/product-page/data")
  //     .then((response) => setProductData(response.data))
  //     .catch((error) => console.error("Error fetching home page data", error));
  // }, []);

  return <div className="restaurant-items">{/* <DealsAndDiscount /> */}</div>;
}

export default RestaurantItems;
