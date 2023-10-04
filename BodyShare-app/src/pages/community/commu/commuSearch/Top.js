import styled from "styled-components";
import backButton from "assets/Img/back.png";
import { useNavigate } from "react-router-dom";

const PreviousButton = styled.button`
  margin-top: 3px;
  margin-left: 5px;
  grid-row: 1;
  width: 20px;
  height: 20px;
  background-image: url(${backButton});
  background-size: cover;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;

const Top = function () {
  const navigate = useNavigate();

  return (
    <>
      <PreviousButton onClick={() => navigate("/community")} />
    </>
  );
};

export default Top;
