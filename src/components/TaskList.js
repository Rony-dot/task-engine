import React from 'react'
// import Container from 'react-bootstrap/Container';
// import ListGroup from 'react-bootstrap/ListGroup';
import { TaskBadge } from './TaskBadge';
import { TaskItem } from './TaskItem';
import "../css/taskitems.css";

export const TaskList = ({ tasks }) => {
    return (
        <div className='container'>
            <ol className="list-group list-group-numbered custom-list">
                {
                    tasks.map((task, i) => (
                        <li key={i} className=" custom-list-item list-group-item d-flex justify-content-between align-items-start mt-4 bg-danger bg-opacity-10 border border-info rounded">
                            <TaskItem config={{ title: task.title, desc: task.desc }} />
                            {
                                task.states.map((state, j) => (
                                    <TaskBadge key={j} state={state} />
                                ))
                            }
                        </li>
                    ))
                }
            </ol>
        </div >
    )
}

