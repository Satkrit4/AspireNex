import React from 'react';
import TaskList from './TaskList';

const Project = ({ project }) => {
    return (
        <div>
            <h2>{project.name}</h2>
            <TaskList projectId={project.id} tasks={project.tasks} />
        </div>
    );
};

export default Project;
