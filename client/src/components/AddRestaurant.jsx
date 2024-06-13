const AddRestaurant = () => {
  return (
    <div>
      <form>
        <div className="flex gap-2 flex-wrap justify-between items-center w-full">
          <input placeholder="name" className="border-2 flex-1" type="text" />
          <input
            placeholder="location"
            className="border-2 flex-1"
            type="text"
          />
          <select className="border-2 flex-1">
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
