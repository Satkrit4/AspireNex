import React, { useContext } from 'react';
import { ProjectContext } from './ProjectContext';

const Task = ({ projectId, task }) => {
    const { toggleTaskCompletion } = useContext(ProjectContext);

    return (
        <div>
            <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.name} (Deadline: {task.deadline})
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(projectId, task.id)}
                />
            </p>
        </div>
    );
};

export default Task;
