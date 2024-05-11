import React from 'react'

export const TaskBadge = (config) => {
    // const { color, state } = config;
    // const state = config.state;
    const colors = {
        initiated: "dark",
        in_progress: "info",
        pending: "warning",
        completed: "success"

    };
    return (
        <span className={` bg-opacity-75 badge text-bg-${colors[config.state]} rounded-pill py-2 ms-1`}>{config.state}</span>
    )
}
