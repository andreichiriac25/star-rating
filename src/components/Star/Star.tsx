import "./Star.scss";

import Icon from "../Icon/Icon";

const Star = ({
  handleStarClick,
  index,
  filled,
}: {
  handleStarClick: (index: number) => void;
  index: number;
  filled: boolean;
}) => {
  return (
    <button onClick={() => handleStarClick(index)} className="star">
      <Icon type={filled ? "filledStar" : "star"} />
    </button>
  );
};

export default Star;
