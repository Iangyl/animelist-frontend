import React, { ReactElement } from 'react';
import { Modal } from '@mui/material';

interface IModal {
  open: boolean;
  onClose: () => void;
  children: ReactElement<JSX.Element | JSX.Element[] | string | string[]>;
}

export default function ModalWindow({ children, open, onClose }: IModal) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ overflow: 'auto' }}
    >
      {children}
    </Modal>
  );
}
