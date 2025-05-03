import React, { useState, useEffect } from "react";
import axios from "../api/api";
import { useAuth } from '../context/useAuth';
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";

function Dashboard() {
  const { user, logout } = useAuth();
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const fetchProjectsAndTasks = async () => {
      try {
        
        const projectRes = await axios.get("/projects");
        setProjects(projectRes.data);

      
        const taskRes = await axios.get("/tasks");
        setTasks(taskRes.data);
      } catch (err) {
        console.error("Error fetching projects and tasks:", err.message);
      }
    };

    fetchProjectsAndTasks();
  }, []);

  const handleTaskChange = (e) => {
    setNewTask(e.target.value); // Update task name for new task
  };

  const handleAddTask = async (projectId) => {
    if (!newTask.trim()) return; // Avoid adding empty tasks

    try {
      const res = await axios.post("/tasks", {
        projectId,
        name: newTask,
      });

      // Add the new task to the corresponding project
      setTasks((prev) => [...prev, res.data]);

      setNewTask(""); // Clear the input after adding the task
    } catch (err) {
      console.error("Error adding task:", err.message);
      alert("Failed to add task");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Header user={user} onLogout={logout} />

      <h3 className="text-xl font-semibold mb-4">Your Projects</h3>
      {projects.map((project) => {
        // Filter tasks specific to the project
        const projectTasks = tasks.filter((task) => task.projectId === project._id);
        return (
          <ProjectCard
            key={project._id}
            project={project}
            tasks={projectTasks}
            newTask={newTask}
            onTaskChange={handleTaskChange}
            onAddTask={handleAddTask}
          />
        );
      })}
    </div>
  );
}

export default Dashboard;
