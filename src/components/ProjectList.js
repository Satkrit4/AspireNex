import React, { useContext } from 'react';
import { ProjectContext } from './ProjectContext';
import Project from './Project';

const ProjectList = () => {
    const { projects, addProject } = useContext(ProjectContext);

    return (
        <div>
            <h1>Projects</h1>
            <button onClick={() => addProject(prompt("Enter project name:"))}>Add Project</button>
            {projects.map(project => (
                <Project key={project.id} project={project} />
            ))}
        </div>
    );
};

export default ProjectList;

