import React, { ReactNode } from "react";
import { Button } from "../button";
import "./styles/modal.css";

interface ModalProps {
  onAction?: () => void;
  onClose?: () => void;
  actionButtonText?: string;
  children?: ReactNode;
  show: boolean;
}

const Modal: React.FC<ModalProps> = ({
  onAction = () => {},
  onClose = () => {},
  actionButtonText = "",
  children,
  show,
}) => {
  return (
    <>
      {show && (
        <div className="absolute-blur-box">
          <div className="modal">
            {children}
            <div className="modal-actions">
              <Button onClick={onClose} type="secondary">
                Close
              </Button>

              <Button onClick={onAction} type="primary">
                {actionButtonText}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
