import React from "react";

export const Input = ({ label, name, value, onChange, type = "text", placeholder, min, max }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label} :</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="form-control"
                id={name}
                placeholder={placeholder}
                min={min}
                max={max}
            />
        </div>
    );
};
