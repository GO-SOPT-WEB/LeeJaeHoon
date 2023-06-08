import React, { useState, useEffect } from "react";
import { NavWrapper, DifficultyButton } from "./Nav.style";
const Nav = ({ onClickDifficulty }) => {
  //: { onClickDifficulty: () => void }
  const [selected, setSelected] = useState("Easy");

  useEffect(() => {});
  const handleClick = (e) => {
    setSelected(e.target.value);
    onClickDifficulty(e);
  };

  return (
    <NavWrapper>
      <DifficultyButton
        value="Easy"
        onClick={handleClick}
        selected={selected === "Easy"}
      >
        Easy
      </DifficultyButton>
      <DifficultyButton
        value="Normal"
        onClick={handleClick}
        selected={selected === "Normal"}
      >
        Normal
      </DifficultyButton>
      <DifficultyButton
        value="Hard"
        onClick={handleClick}
        selected={selected === "Hard"}
      >
        Hard
      </DifficultyButton>
    </NavWrapper>
  );
};

export default Nav;
