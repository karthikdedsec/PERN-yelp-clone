import { createContext, useState } from "react";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState([]);

  const addRestaurant = (rest) => {
    setRestaurants([...restaurants, rest]);
  };

  const deleteRestaurant = (id) => {
    setRestaurants((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };
  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        setRestaurants,
        addRestaurant,
        deleteRestaurant,
        selectedRestaurant,
        setSelectedRestaurant,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
