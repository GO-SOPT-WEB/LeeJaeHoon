import React, { useState, useEffect } from "react";
import { NavWrapper, DifficultyButton } from "./Nav.style";
import { useSetRecoilState, useResetRecoilState } from "recoil";
import { difficultyState, scoreState, allCardState } from "../../atoms/atom";
const Nav = ({}) => {
  //: { onClickDifficulty: () => void }
  const [selected, setSelected] = useState("Easy");
  const setDifficulty = useSetRecoilState(difficultyState);
  const setCorrect = useSetRecoilState(scoreState);
  const setAllCard = useSetRecoilState(allCardState);
  const onClickDifficulty = (e) => {
    setDifficulty(e.target.value);

    switch (e.target.value) {
      case "Easy":
        setAllCard(5);
        setCorrect(0);
        break;
      case "Normal":
        setAllCard(7);
        setCorrect(0);
        break;
      case "Hard":
        setAllCard(9);
        setCorrect(0);
        break;
      default:
        break;
    }
  };

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
