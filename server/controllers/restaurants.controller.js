import { query } from "../db/index.js";

//get all restaurants => /api/v1/restaurants
export const getRestaurants = async (req, res, next) => {
  const data = await query("select * from restaurants;");
  res.status(200).json({
    success: true,
    data: {
      restaurants: data,
    },
  });
};

//get single restaurants => /api/v1/restaurants/:id
export const getRestaurant = (req, res, next) => {};

//create restaurants => /api/v1/restaurants
export const createRestaurant = (req, res, next) => {
  console.log(req.body);
};

//update restaurants => /api/v1/restaurants/:id
export const updateRestaurants = (req, res, next) => {
  console.log(req.params.id);
};

//delete restaurants => /api/v1/restaurants/:id
export const deleteRestaurants = (req, res, next) => {};
