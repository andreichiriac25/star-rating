import filledStar from "../../assets/filled-star.png";
import star from "../../assets/star.png";

const iconTypes = {
  star: "star",
  filledStar: "filled-star",
};

const Icon = ({ type }: { type: string }) => {
  if (type === iconTypes.star) {
    return <img src={star} alt="star" />;
  }
  return <img src={filledStar} alt="filledStar" />;
};

export default Icon;
