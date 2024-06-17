import { useContext, useEffect } from "react";
import { RestaurantContext } from "../context/RestaurantContext";
import restaurantsapi from "../apis/restaurantsapi";
import { useParams } from "react-router-dom";

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

  return <div>RestaurantDetails</div>;
};
export default RestaurantDetails;
