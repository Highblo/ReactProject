import styled from "styled-components";

import { SButton } from "../styled/Button";

export const StartGame = ({ toggle }) => {
  return (
    <SContainer>
      <div>
        <img src="images/dices.png" alt="Dices" draggable='false' />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <SButton onClick={toggle}>Play now</SButton>
      </div>
    </SContainer>
  );
};

const SContainer = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  align-items: center;

  .content {
    text-align: center;
    
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  } 
`;