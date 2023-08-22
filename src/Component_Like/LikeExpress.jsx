import React from "react";
import styled from "styled-components";
import HeartImg from "./heart.png"; 
import EmptyHeartImg from "./empty-heart.png";

const Heart = styled.img`
    width: 35px;
    height: 35px;
`;

const LikeExpress = ({ like, onClick }) => {
  return (
    <Heart
      src={like ? HeartImg : EmptyHeartImg}
      onClick={onClick}
      alt={like ? "Filled Heart" : "Empty Heart"}
    />
  );
};

export default LikeExpress;