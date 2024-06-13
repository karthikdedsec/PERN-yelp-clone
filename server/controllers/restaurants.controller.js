import { query } from "../db/index.js";

//get all restaurants => /api/v1/restaurants
export const getRestaurants = async (req, res, next) => {
  try {
    const data = await query("select * from restaurants;");
    res.status(200).json({
      success: true,
      results: data.rows.length,
      data: {
        restaurants: data.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

//get single restaurants => /api/v1/restaurants/:id
export const getRestaurant = async (req, res, next) => {
  try {
    const data = await query("select * from restaurants where id = $1", [
      req.params.id,
    ]);
    res.status(200).json({
      success: true,
      data: {
        restaurant: data.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
};

//create restaurants => /api/v1/restaurants
export const createRestaurant = async (req, res, next) => {
  const { name, location, price_range } = req.body;
  try {
    const data = await query(
      "INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) returning *",
      [name, location, price_range]
    );
    res.status(201).json({
      success: true,
      data: {
        restaurant: data.rows[0],
      },
    });
  } catch (error) {}
};

//update restaurants => /api/v1/restaurants/:id
export const updateRestaurants = async (req, res, next) => {
  const { name, location, price_range } = req.body;
  try {
    const data = await query(
      "UPDATE restaurants SET name = $1, location = $2, price_range = $3 where id = $4 returning *",
      [name, location, price_range, req.params.id]
    );
    res.status(200).json({
      success: true,
      restaurant: data.rows[0],
    });
  } catch (error) {
    console.log(error);
  }
};

//delete restaurants => /api/v1/restaurants/:id
export const deleteRestaurants = async (req, res, next) => {
  try {
    await query("DELETE FROM restaurants where id = $1", [req.params.id]);
    res.status(200).json({
      success: true,
      message: "successfully deleted",
    });
  } catch (error) {
    console.log(error);
  }
};
