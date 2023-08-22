import React, { useState } from "react"; 
import HeartButton from "./LikeExpress";

const LikeExpressParent = (props) => {
  const [like, setLike] = useState(false);


  const toggleLike = () => {
      setLike(!like);
  };

  return (
    <div>
      <HeartButton like={like} onClick={toggleLike} />
    </div>
  );
};

export default LikeExpressParent;
