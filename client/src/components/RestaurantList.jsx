const RestaurantList = ({ data }) => {
  return (
    <div className="flex justify-center mt-7">
      <table>
        <thead>
          <tr className="text-white">
            <th>Restaurant</th>
            <th>Location</th>
            <th>price range</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
              <td>
                <button className="bg-orange-400 px-4 py-2 text-white rounded-xl">
                  edit
                </button>
              </td>
              <td>
                <button className="bg-red-500 px-4 py-2 text-white rounded-xl">
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
