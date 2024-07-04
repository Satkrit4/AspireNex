import React, { useState } from 'react';

const AddTaskForm = ({ projectId, addTask }) => {
    const [taskName, setTaskName] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(projectId, taskName, deadline);
        setTaskName('');
        setDeadline('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={taskName} 
                onChange={(e) => setTaskName(e.target.value)} 
                placeholder="Task name" 
                required 
            />
            <input 
                type="date" 
                value={deadline} 
                onChange={(e) => setDeadline(e.target.value)} 
                required 
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default AddTaskForm;

