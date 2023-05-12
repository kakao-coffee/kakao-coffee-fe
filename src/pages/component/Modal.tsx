import { modalState } from "@/utils/atoms";
import styled from "@emotion/styled";
import { useRef } from "react";
import { useSetRecoilState } from "recoil";
import { motion } from "framer-motion";
import { modalBlurVariants, modalContentVariants } from "@/styles/variants";

const Modal = () => {
  const setIsModal = useSetRecoilState(modalState);
  const modalRef = useRef(null);
  return (
    <ModalWrapper
      variants={modalBlurVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      ref={modalRef}
      onClick={(e) => {
        if (e.target === modalRef.current) {
          setIsModal(false);
        }
      }}
    >
      <ModalContentWrapper
        variants={modalContentVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        안녕
      </ModalContentWrapper>
    </ModalWrapper>
  );
};

const ModalWrapper = styled(motion.div)`
  left: 0;
  top: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(0.7rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContentWrapper = styled(motion.section)`
  width: 92vw;
  height: 60rem;
  max-width: 65rem;
  border-radius: 0.6rem;
  background: ${(props) => props.theme.backgroundColor};
`;

export default Modal;
