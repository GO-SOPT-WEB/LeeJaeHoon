import React, { useEffect, useState } from "react";
import {
  HeaderWrapper,
  MainText,
  SubText,
  SubTextAnimation,
} from "./Header.style";
const Header = ({ correct, EA }) => {
  const [animation, setAnimation] = useState(false);
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
        {correct} / {EA}
      </SubTextAnimation>
    </HeaderWrapper>
  );
};

export default Header;
