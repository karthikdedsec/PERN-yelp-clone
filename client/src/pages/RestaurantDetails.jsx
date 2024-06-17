import { useContext, useEffect } from "react";
import { RestaurantContext } from "../context/RestaurantContext";
import restaurantsapi from "../apis/restaurantsapi";
import { useParams } from "react-router-dom";
import StarRatings from "../components/StarRatings";
import Ratings from "../components/Ratings";

const RestaurantDetails = () => {
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantContext);

  const params = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await restaurantsapi.get(`/restaurants/${params.id}`);
        setSelectedRestaurant(res.data.data.restaurant);
        console.log(selectedRestaurant);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
  }, []);

  return (
    <div className="mt-3 w-full">
      <Ratings />
    </div>
  );
};
export default RestaurantDetails;
