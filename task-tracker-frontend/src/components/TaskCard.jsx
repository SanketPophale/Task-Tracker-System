const TaskCard = ({ task }) => {
  return (
    <div style={{ padding: '0.5rem', margin: '0.5rem 0', border: '1px dashed #888' }}>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Created: {new Date(task.createdAt).toLocaleDateString()}</p>
      {task.completedAt && <p>Completed: {new Date(task.completedAt).toLocaleDateString()}</p>}
    </div>
  );
};

export default TaskCard;
