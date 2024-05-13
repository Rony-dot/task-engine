import React from "react";

export const Select = ({ label, name, value, onChange, options }) => {
    return (
        <div className="form-group input-group-sm mt-2">
            <label htmlFor={name}>{label}:</label>
            <select className="form-control" id={name} name={name} value={value} onChange={onChange}>
                {options.map((x, i) => (
                    <option key={i} value={x.value}>
                        {x.label}
                    </option>
                ))}
            </select>
        </div>
    );
};
