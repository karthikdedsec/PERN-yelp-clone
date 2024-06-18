import StarRatings from "./StarRatings";

const Ratings = ({ reviews }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {reviews?.map((item, i) => (
        <div key={i} className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p>{item.reviews}</p>
            <div className="card-actions justify-end">
              <StarRatings ratings={item.ratings} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Ratings;
