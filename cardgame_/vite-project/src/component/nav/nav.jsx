import React from "react";
import { NavWrapper, DifficultyButton } from "./Nav.style";
const Nav = ({ onClickDifficulty }) => {
  return (
    <NavWrapper>
      <DifficultyButton value="Easy" onClick={onClickDifficulty}>
        Easy
      </DifficultyButton>
      <DifficultyButton value="Normal" onClick={onClickDifficulty}>
        Normal
      </DifficultyButton>
      <DifficultyButton value="Hard" onClick={onClickDifficulty}>
        Hard
      </DifficultyButton>
    </NavWrapper>
  );
};

export default Nav;
