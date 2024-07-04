import React from 'react';
import ProjectList from './components/ProjectList';
import ProjectProvider from './components/ProjectContext';
import './App.css';

function App() {
    return (
        <ProjectProvider>
            <div className="App">
                <ProjectList />
            </div>
        </ProjectProvider>
    );
}

export default App;
