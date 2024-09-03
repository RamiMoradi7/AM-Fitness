import React, { useState } from "react";

interface ModalProps {
    children: JSX.Element;
    isOpen: boolean;
    toggleModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, toggleModal }) => {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg max-w-lg w-full mx-4 p-6 relative">
                        <button
                            onClick={toggleModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
