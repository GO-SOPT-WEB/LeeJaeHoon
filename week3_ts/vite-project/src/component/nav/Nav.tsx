import React, { useState } from "react";
import { NavWrapper, DifficultyButton } from "./Nav.style";
import { useSetRecoilState } from "recoil";
import { difficultyState, scoreState, allCardState } from "../../atoms/atom";
const Nav = ({}) => {
  const [selected, setSelected] = useState<string>("Easy");
  const setDifficulty = useSetRecoilState(difficultyState);
  const setCorrect = useSetRecoilState(scoreState);
  const setAllCard = useSetRecoilState(allCardState);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const value = (e.target as HTMLButtonElement).value;
    setSelected(value);
    setDifficulty(value);

    switch (value) {
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
