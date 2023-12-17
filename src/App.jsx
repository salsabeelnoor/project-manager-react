import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectsState] = useState({
    selectedProjectId: undefined, //doing nothing
    projects: []
  });
  function handleStartAddProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null, //adding a new Project
      }
    });
  }
  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }
  function handleCancelAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined, //adding a new Project
      }
    });
  }
  function handleSelectProject(id){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id 
      }
    })
  }
  function handleDeleteProject(){
    setProjectsState(prevState => {
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => {
          project.id !== prevState.selectedProjectId
        })
      }
    })
  }
  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);
  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject}/>;
  if(projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  }
  else if(projectState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar 
      projects={projectState.projects} 
      onStartAddProject={handleStartAddProject}
      onSelectProject={handleSelectProject}/>
      {content}
    </main>
  );
}

export default App;
