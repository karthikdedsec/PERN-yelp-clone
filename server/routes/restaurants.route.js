import express from "express";
import {
  createRestaurant,
  getRestaurants,
} from "../controllers/restaurants.controller.js";

const router = express.Router();

router.route("/restaurants").get(getRestaurants);
router.route("/restaurants").post(createRestaurant);

export default router;
