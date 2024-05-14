import React from 'react'
import { Input } from './Input'
import { Select } from './Select';

export const AddTaskForm = ({ formdata, setformdata, onSubmit }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log("name: " + name + ", value: " + value);
        setformdata({
            ...formdata,
            [name]: value // TODO; why using [] around the name, 
        });
    };

    return (
        <form onSubmit={onSubmit}>
            <Input label="Title" name="title" onChange={handleChange} value={formdata.title} placeholder="Title" />
            <Input label="Description" name="desc" onChange={handleChange} value={formdata.desc} placeholder="Description" />
            <Select
                label="State"
                name="state"
                onChange={handleChange}
                value={formdata.state}
                options={[
                    { label: "In-Progress", value: "in_progress" },
                    { label: "Pending", value: "pending" },
                    { label: "Completed", value: "completed" },
                    { label: "Initiated", value: "initiated" },
                ]}
            />
            <div className="d-grid gap-2 mt-2">
                <button type='submit' className='btn btn-outline-success btn-sm mt-2'>Create</button>
            </div>
        </form>
    )
}
