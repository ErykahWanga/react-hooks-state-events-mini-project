import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { text, category };
    onTaskFormSubmit(newTask); // Pass new task to parent
    setText(""); // Reset input fields
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Task text input */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Task text"
      />

      {/* Category dropdown */}
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select a category</option>
        {categories
          .filter((cat) => cat !== "All") // Exclude "All"
          .map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;