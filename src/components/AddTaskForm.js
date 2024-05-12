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
                label="state"
                name="states"
                onChange={handleChange}
                value={formdata.states}
                options={[
                    { label: "In-Progress", value: "in_progress" },
                    { label: "Pending", value: "pending" },
                    { label: "Completed", value: "completed" },
                    { label: "Initiated", value: "initiated" },
                ]}
            />
            <button type='submit' className='btn btn-primary'>Create</button>
        </form>
    )
}
