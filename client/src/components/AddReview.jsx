import { useContext, useState } from "react";
import restaurantsapi from "../apis/restaurantsapi";
import { useParams } from "react-router-dom";

function AddReview() {
  const [name, setName] = useState("");
  const [reviews, setReviews] = useState("");
  const [ratings, setRatings] = useState("select a rating");
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await restaurantsapi.post(
        `/restaurants/${params.id}/reviews`,
        {
          name,
          reviews,
          ratings: Number(ratings),
        }
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-24 max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="flex gap-2">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="name"
            className="border-2 p-2 flex-1"
            type="text"
          />
          <input
            onChange={(e) => setReviews(e.target.value)}
            value={reviews}
            placeholder="review"
            className="border-2 p-2 flex-1"
            type="text"
          />
        </div>
        <div className="flex gap-2">
          <select
            onChange={(e) => setRatings(e.target.value)}
            value={ratings}
            className="border-2 p-2 "
          >
            <option className="text-gray-400" disabled value="select a rating">
              select a rating
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button
            type="submit"
            className="px-2 py-4 bg-blue-600 text-white rounded-xl flex-1"
          >
            add review
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddReview;
