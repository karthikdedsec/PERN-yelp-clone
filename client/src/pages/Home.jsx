import AddRestaurant from "../components/AddRestaurant";
import Header from "../components/Header";
import RestaurantList from "../components/RestaurantList";

const Home = () => {
  const data = [
    { name: "John Doe", age: 28, city: "New York" },
    { name: "Jane Smith", age: 34, city: "Los Angeles" },
    { name: "Sam Green", age: 22, city: "Chicago" },
  ];
  return (
    <div>
      <Header />
      <AddRestaurant />
      <RestaurantList data={data} />
    </div>
  );
};
export default Home;
