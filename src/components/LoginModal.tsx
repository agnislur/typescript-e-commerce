import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for accessibility

interface LoginModalProps {
  isOpen: boolean;
  closeLoginModal: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, closeLoginModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeLoginModal}
      contentLabel="Login Modal"
      className="fixed inset-0 bg-white p-6 rounded-lg shadow-lg w-96 m-auto"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      {/* Your login form goes here */}
    </Modal>
  );
};

export default LoginModal;
