import styled from "styled-components";

export const TotalScore = ({ score }) => {
  return (
    <SScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </SScoreContainer>
  );
};

const SScoreContainer = styled.div`
  text-align: center;
  max-width: 200px;
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500px;
  }
`;
