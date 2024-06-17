import StarRatings from "./StarRatings";

const Ratings = ({ name, reviews, ratings }) => {
  return (
    <div className="card w-96 bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <StarRatings ratings={4} />
        </div>
      </div>
    </div>
  );
};
export default Ratings;
