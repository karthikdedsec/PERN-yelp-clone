import { useContext, useState } from "react";
import restaurantsapi from "../apis/restaurantsapi";
import { RestaurantContext } from "../context/RestaurantContext";

const AddRestaurant = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const { addRestaurant } = useContext(RestaurantContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await restaurantsapi.post("/restaurants", {
        name,
        location,
        price_range: priceRange,
      });
      if (res.data.success) {
        addRestaurant(res.data.data.restaurant);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2 flex-wrap justify-between items-center w-full">
          <input
            value={name}
            placeholder="name"
            className="border-2 flex-1"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            value={location}
            placeholder="location"
            className="border-2 flex-1"
            type="text"
            onChange={(e) => setLocation(e.target.value)}
          />
          <select
            onChange={(e) => setPriceRange(e.target.value)}
            value={priceRange}
            className="border-2 flex-1"
          >
            <option disabled>price range</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
            <option value="5">$$$$$</option>
          </select>
          <button
            className="bg-blue-500 px-4 py-2 text-white rounded-lg"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddRestaurant;
