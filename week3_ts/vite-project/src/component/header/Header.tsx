import React, { useEffect, useState } from "react";
import { HeaderWrapper, MainText, SubTextAnimation } from "./Header.style";
import { allCardState, scoreState } from "../../atoms/atom";
import { useRecoilValue } from "recoil";
const Header = () => {
  const [animation, setAnimation] = useState(false);
  const correct = useRecoilValue(scoreState);
  const allCard = useRecoilValue(allCardState);
  useEffect(() => {
    if (correct) {
      setAnimation(true);
      const timeout = setTimeout(() => setAnimation(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [correct]);
  return (
    <HeaderWrapper>
      <MainText>라이언 일병 맞추기</MainText>

      <SubTextAnimation animation={animation}>
        {correct} / {allCard}
      </SubTextAnimation>
    </HeaderWrapper>
  );
};

export default Header;
