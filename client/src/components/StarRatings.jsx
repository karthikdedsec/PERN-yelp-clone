import React from "react";

const StarRatings = ({ ratings }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= ratings) {
      stars.push(<i className="fa-solid fa-star"></i>);
    } else if (i === Math.ceil(ratings) && !Number.isInteger(ratings)) {
      stars.push(<i className="fa-solid fa-star-half-stroke"></i>);
    } else {
      stars.push(<i className="fa-regular fa-star"></i>);
    }
  }

  return (
    <>
      {stars.map((item, i) => (
        <React.Fragment key={i}>{item}</React.Fragment>
      ))}
    </>
  );
};
export default StarRatings;
