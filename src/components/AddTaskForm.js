import React from 'react'
import { Input } from './Input'

export const AddTaskForm = (formData) => {
    const handleChange = () => { };
    return (
        <form>
            <Input label="Title" name="title" onChange={handleChange} value={formData.title} placeholder="Title" />
            <Input type="texarea" label="Description" name="des" onChange={handleChange} value={formData.desc} placeholder="Description" />
        </form>
    )
}
