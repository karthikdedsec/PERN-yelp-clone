const UpdateRestaurant = () => {
  return (
    <div>
      <div className="text-center text-3xl m-5">UpdateRestaurant</div>
      <div className="mt-24">
        <div className="lg:max-w-4xl md:max-w-2xl max-w-xl">
          <form className="flex flex-col gap-4">
            <label className="flex flex-col">
              name
              <input className="border-2 p-1.5" type="text" />
            </label>
            <label className="flex flex-col">
              location
              <input className="border-2 p-1.5" type="text" />
            </label>
            <label className="flex flex-col">
              price_range
              <div className="flex gap-2">
                <select className="w-1/2 border-2 flex-1">
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
