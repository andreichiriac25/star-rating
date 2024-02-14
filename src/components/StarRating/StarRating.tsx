import { useState } from "react";

import Star from "../Star/Star";

const StarRating = () => {
  const [stars, setStars] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleStarClick = (index: number) => {
    setStars((currStars: boolean[]) =>
      currStars.map((star: boolean, currIndex: number) =>
        currIndex <= index ? true : false
      )
    );
  };

  return (
    <>
      {stars.map((filled: boolean, index: number) => (
        <Star handleStarClick={handleStarClick} index={index} filled={filled} />
      ))}
    </>
  );
};

export default StarRating;
