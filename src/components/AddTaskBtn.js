import React, { useState } from 'react'
import "../css/addTaskIcon.css";
import { AddTaskModal } from './AddTaskModal';
import { AddTaskForm } from './AddTaskForm';

export const AddTaskBtn = () => {
    const [showModal, setshowModal] = useState(false)
    const [formdata, setformdata] = useState({
        id: 1,
        title: "Demo Title",
        desc: "Demo Description",
        states: ["in_progress", "initiated"]
    })
    const toggleModal = () => {
        setshowModal(!showModal)
    }
    const handleSubmit = () => {

    }

    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-auto">
                    <button className="btn" type=" button" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => toggleModal()}>
                        <span className="material-icons md-48 orange600">
                            add_circle
                        </span>
                    </button>
                    {showModal && (
                        <AddTaskModal onClose={() => toggleModal()} >
                            <AddTaskForm formdata={formdata} setformdata={setformdata} onSubmit={handleSubmit} ></AddTaskForm>
                        </AddTaskModal>
                    )}
                </div>
            </div>
        </div >
    )
}
