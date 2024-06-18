import { useContext, useEffect, useState } from "react";
import { RestaurantContext } from "../context/RestaurantContext";
import restaurantsapi from "../apis/restaurantsapi";
import { useParams } from "react-router-dom";
import StarRatings from "../components/StarRatings";
import Ratings from "../components/Ratings";
import AddReview from "../components/AddReview";

const RestaurantDetails = () => {
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantContext);

  const [reviews, setReviews] = useState([]);

  const params = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await restaurantsapi.get(`/restaurants/${params.id}`);
        setSelectedRestaurant(res.data.data);
        // console.log(selectedRestaurant);
        setReviews([...res.data.data.reviews]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
  }, []);

  console.log(selectedRestaurant);

  return (
    <div className="mt-3 w-full">
      <h1 className="text-4xl font-bold text-center m-8">
        {selectedRestaurant?.restaurant?.name}
      </h1>
      {selectedRestaurant?.restaurant?.average_ratings !== null && (
        <p className="text-center my-2">
          <StarRatings
            ratings={selectedRestaurant?.restaurant?.average_ratings}
          />
          ({selectedRestaurant?.restaurant?.count})
        </p>
      )}

      {selectedRestaurant?.reviews?.length === 0 ? (
        <h2 className="text-2xl font-semibold text-center mt-6">No reviews!</h2>
      ) : (
        <Ratings reviews={selectedRestaurant?.reviews} />
      )}
      <AddReview />
    </div>
  );
};
export default RestaurantDetails;
