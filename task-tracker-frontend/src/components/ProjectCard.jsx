import TaskCard from './TaskCard';

const ProjectCard = ({ project, onAddTask, tasks }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">{project.name}</h3>
        <button
          onClick={() => onAddTask(project._id)}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          + Add Task
        </button>
      </div>

      <div className="space-y-2">
        {tasks
          .filter((task) => task.projectId === project._id)
          .map((task) => (
            <TaskCard key={task._id} task={task} />
          ))}
      </div>
    </div>
  );
};

export default ProjectCard;
