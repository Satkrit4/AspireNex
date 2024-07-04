import React, { createContext, useState } from 'react';

export const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);

    const addProject = (projectName) => {
        const newProject = {
            id: projects.length + 1,
            name: projectName,
            tasks: []
        };
        setProjects([...projects, newProject]);
    };

    const addTask = (projectId, taskName, deadline) => {
        setProjects(projects.map(project => {
            if (project.id === projectId) {
                const newTask = {
                    id: project.tasks.length + 1,
                    name: taskName,
                    deadline,
                    completed: false
                };
                return { ...project, tasks: [...project.tasks, newTask] };
            }
            return project;
        }));
    };

    const toggleTaskCompletion = (projectId, taskId) => {
        setProjects(projects.map(project => {
            if (project.id === projectId) {
                const updatedTasks = project.tasks.map(task => {
                    if (task.id === taskId) {
                        return { ...task, completed: !task.completed };
                    }
                    return task;
                });
                return { ...project, tasks: updatedTasks };
            }
            return project;
        }));
    };

    return (
        <ProjectContext.Provider value={{ projects, addProject, addTask, toggleTaskCompletion }}>
            {children}
        </ProjectContext.Provider>
    );
};

export default ProjectProvider;
