import React from 'react'

export const TaskBadge = ({ state }) => {
    // const { color, state } = config;
    // const state = config.state;
    const colors = {
        initiated: "dark",
        in_progress: "info",
        pending: "warning",
        completed: "success"

    };
    return (
        <span className={` bg-opacity-75 badge text-bg-${colors[state]} rounded-pill py-2 ms-1`}>{state}</span>
    )
}
