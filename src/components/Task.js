import React from "react";

function Task({ task, onDelete }) {
  // Handle delete button click
  const handleDelete = () => {
    onDelete(task);
  };

  return (
    <div>
      <span>{task.text}</span>
      <span>{task.category}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Task;