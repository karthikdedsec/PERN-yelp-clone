import express from "express";
import {
  addReviews,
  createRestaurant,
  deleteRestaurants,
  getRestaurant,
  getRestaurants,
  updateRestaurants,
} from "../controllers/restaurants.controller.js";

const router = express.Router();

router.route("/restaurants").get(getRestaurants);
router.route("/restaurants").post(createRestaurant);
router
  .route("/restaurants/:id")
  .get(getRestaurant)
  .put(updateRestaurants)
  .delete(deleteRestaurants);
router.route("/restaurants/:id/reviews").post(addReviews);

export default router;
