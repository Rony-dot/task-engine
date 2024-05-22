import React from "react";
import "../../css/modal.css";

export const AddTaskModal = ({ onClose, children }) => {
    return (
        <div className="modalCustom">
            <div className="modalCustom-content">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                {children}
            </div>
        </div>
    );
};
