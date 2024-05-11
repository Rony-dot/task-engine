import React from 'react'
import "../css/addTaskIcon.css";

export const AddTaskBtn = () => {
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-auto">
                    <span className="material-icons md-48 orange600">
                        add_circle
                    </span>
                </div>
            </div>
        </div >
    )
}
