import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); // 배경색을 회색으로 설정
  z-index: 999;
`;

const ModalPortal = ({ children }) => {
  const modalRoot = document.getElementById("modal-root");
  return ReactDOM.createPortal(
    <ModalOverlay>{children}</ModalOverlay>,
    modalRoot
  );
};

export default ModalPortal;
