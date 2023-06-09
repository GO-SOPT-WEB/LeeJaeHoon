import React from "react";
import ModalPortal from "./Modalpotal";

import { childrenProps } from "../..";
import { scoreState, resetState, setModalState } from "../../atoms/atom";
import { useSetRecoilState } from "recoil";
import { ModalPortalWrapper, ModalBtn } from "./ModalFrame.style";
const ModalFrame = ({ children }: childrenProps) => {
  const setCorrect = useSetRecoilState(scoreState);
  const setReset = useSetRecoilState(resetState);
  const setModal = useSetRecoilState(setModalState);

  const handleReset = () => {
    setCorrect(0);
    setReset((toggle) => !toggle);
  };
  return (
    <ModalPortal>
      <ModalPortalWrapper>
        {children}
        <ModalBtn
          onClick={() => {
            setModal(false);
            handleReset();
          }}
        >
          게임으로 돌아가기
        </ModalBtn>
      </ModalPortalWrapper>
    </ModalPortal>
  );
};

export default ModalFrame;
