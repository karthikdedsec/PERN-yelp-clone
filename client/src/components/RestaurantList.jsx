import { useContext, useEffect, useRef } from "react";
import restaurantsapi from "../apis/restaurantsapi";
import { RestaurantContext } from "../context/RestaurantContext";

const RestaurantList = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantContext);
  const { deleteRestaurant } = useContext(RestaurantContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await restaurantsapi.get("/restaurants");

        setRestaurants(res.data.data.restaurants);
        console.log(restaurants);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await restaurantsapi.delete(`/restaurants/${id}`);
      deleteRestaurant(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center mt-7">
      <table>
        <thead>
          <tr className="text-white">
            <th>Restaurant</th>
            <th>Location</th>
            <th>price range</th>
            <th>reviews</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants &&
            restaurants.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.location}</td>
                <td>{"$".repeat(item.price_range)}</td>
                <td>reviews</td>
                <td>
                  <button className="bg-orange-400 px-4 py-2 text-white rounded-xl">
                    edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 px-4 py-2 text-white rounded-xl"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
