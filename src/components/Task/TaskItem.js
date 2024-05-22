import React from 'react'

export const TaskItem = ({ config }) => {
    const { title, desc } = config;
    return (
        <div className="ms-2 me-auto">
            <div className="fw-bold">{title}</div>
            {desc}
        </div>
    )
}
