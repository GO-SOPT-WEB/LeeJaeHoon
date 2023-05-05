import React from "react";
import ModalPortal from "./Modalpotal";
import styled from "styled-components";

import { ModalPortalWrapper, ModalBtn } from "./ModalFrame.style";
const ModalFrame = ({ children, setOnModal, handleReset }) => {
  return (
    <ModalPortal>
      <ModalPortalWrapper>
        {children}
        <ModalBtn
          onClick={() => {
            setOnModal(false);
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
