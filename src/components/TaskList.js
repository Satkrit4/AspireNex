import React, { useContext } from 'react';
import { ProjectContext } from './ProjectContext';
import Task from './Task';
import AddTaskForm from './AddTaskForm';
import ProgressBar from './ProgressBar';

const TaskList = ({ projectId, tasks }) => {
    const { addTask } = useContext(ProjectContext);

    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    const progress = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

    return (
        <div>
            <h3>Tasks</h3>
            <ProgressBar progress={progress} />
            {tasks.map(task => (
                <Task key={task.id} projectId={projectId} task={task} />
            ))}
            <AddTaskForm projectId={projectId} addTask={addTask} />
        </div>
    );
};

export default TaskList;
