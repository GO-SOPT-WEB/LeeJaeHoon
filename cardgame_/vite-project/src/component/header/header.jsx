import React from "react";
import { HeaderWrapper, MainText, SubText } from "./header.style";
const Header = ({ correct, EA }) => {
  return (
    <HeaderWrapper>
      <MainText>라이언 일병 맞추기</MainText>
      <SubText>
        {correct} / {EA}
      </SubText>
    </HeaderWrapper>
  );
};

export default Header;
