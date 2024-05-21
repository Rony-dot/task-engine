import React, { useState } from 'react'
// import Container from 'react-bootstrap/Container';
// import ListGroup from 'react-bootstrap/ListGroup';
import { TaskBadge } from './TaskBadge';
import { TaskItem } from './TaskItem';
import "../css/taskitems.css";
import { AddTaskModal } from './AddTaskModal';
import { AddTaskForm } from './AddTaskForm';

export const TaskList = ({ tasks, handleDelete, handleEdit }) => {
    const [showModal, setshowModal] = useState(false)
    const [TaskData, setTaskData] = useState({
        id: 1,
        title: "Demo Title",
        desc: "Demo Description",
        state: "in_progress"
    })

    const toggleModal = () => {
        setshowModal(!showModal)
    }

    const handleEditBtn = (task) => {
        setTaskData(task)
        toggleModal()
    }

    const handleEditTask = (e) => {
        e.preventDefault()
        handleEdit(TaskData)
        toggleModal()
    }



    return (
        <div className='container'>
            {showModal && (
                <AddTaskModal onClose={() => toggleModal()} >
                    <AddTaskForm formdata={TaskData} setformdata={setTaskData} onSubmit={handleEditTask} />
                </AddTaskModal>
            )}
            <ol className="list-group list-group-numbered custom-list">
                {
                    tasks.map((task, i) => (
                        <li key={i} className="custom-list-item list-group-item d-flex justify-content-between align-items-start mt-4 bg-danger bg-opacity-10 border border-info rounded">
                            <TaskItem config={{ title: task.title, desc: task.desc }} />
                            <TaskBadge state={task.state} />
                            <div onClick={() => handleEditBtn(task)} className="btn btn-lg ms-3 px-0" >
                                <i className="bi bi-pen"></i>
                            </div>
                            <button onClick={() => handleDelete(task.id)} className="btn btn-lg">
                                <i className="bi bi-trash"></i>
                            </button>
                        </li>
                    ))
                }
            </ol>
        </div >
    )
}

