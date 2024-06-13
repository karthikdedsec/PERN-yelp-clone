import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import RestaurantDetails from "./pages/RestaurantDetails";
import UpdateRestaurant from "./pages/UpdateRestaurant";
import { RestaurantContextProvider } from "./context/RestaurantContext";

const App = () => {
  return (
    <RestaurantContextProvider>
      <div className="App px-6 mx-auto lg:max-w-4xl sm:max-w-xl">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurant/:id" element={<RestaurantDetails />} />
            <Route
              path="/restaurant/:id/update"
              element={<UpdateRestaurant />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </RestaurantContextProvider>
  );
};
export default App;
