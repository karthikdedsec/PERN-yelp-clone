//get all restaurants => /api/v1/restaurants
export const getRestaurants = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: {
      restaurants: ["mcdonalds", "wendys"],
    },
  });
};

//get single restaurants => /api/v1/restaurants/:id
export const getRestaurant = (req, res, next) => {};

//create restaurants => /api/v1/restaurants
export const createRestaurant = (req, res, next) => {
  console.log(req.body);
};
