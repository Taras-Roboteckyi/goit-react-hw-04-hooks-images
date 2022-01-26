import { useEffect } from "react";
import styles from "../Modal/Modal.module.css";

const { Overlay, Modal } = styles;

export default function ModalWindow({ onClose, children }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <div className={Overlay} onClick={handleBackdropClick}>
      <div className={Modal}>{children}</div>
    </div>
  );
}
