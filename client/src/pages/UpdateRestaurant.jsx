import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import restaurantsapi from "../apis/restaurantsapi";

const UpdateRestaurant = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("price_range");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await restaurantsapi.get(`/restaurants/${params.id}`);
        // setName(data.data.restaurant.name);
        setName(data?.data?.data?.restaurant?.name);
        setLocation(data?.data?.data?.restaurant?.location);
        setPriceRange(data?.data?.data?.restaurant?.price_range);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await restaurantsapi.put(`/restaurants/${params.id}`, {
        name,
        location,
        price_range: priceRange,
      });
      if (res.data.success) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="text-center text-3xl m-5">UpdateRestaurant</div>
      <div className="mt-24">
        <div className="lg:max-w-4xl md:max-w-2xl max-w-xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="flex flex-col">
              name
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-2 p-1.5"
                type="text"
              />
            </label>
            <label className="flex flex-col">
              location
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border-2 p-1.5"
                type="text"
              />
            </label>
            <label className="flex flex-col">
              price_range
              <div className="flex gap-2">
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-1/2 border-2 flex-1"
                >
                  <option disabled value={"price_range"}>
                    price_range
                  </option>
                  <option value="1">$</option>
                  <option value="2">$$</option>
                  <option value="3">$$$</option>
                  <option value="4">$$$$</option>
                </select>
                <button className="bg-orange-400 px-4 py-2">update</button>
              </div>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};
export default UpdateRestaurant;
