import React, { useState } from "react";
import TaskList from "./components/TaskList";
import CategoryFilter from "./components/CategoryFilter";
import NewTaskForm from "./components/NewTaskForm";

function App() {
  // State for tasks and filtered tasks
  const [tasks, setTasks] = useState([
    { text: "Buy groceries", category: "Shopping" },
    { text: "Read a book", category: "Personal" },
    { text: "Pay bills", category: "Finance" },
  ]);

  const [filteredTasks, setFilteredTasks] = useState(tasks);

  // Categories list
  const categories = ["All", "Shopping", "Personal", "Finance"];

  // Function to delete a task
  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
    setFilteredTasks(filteredTasks.filter((task) => task !== taskToDelete));
  };

  // Function to filter tasks by category
  const filterTasks = (category) => {
    if (category === "All") {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(tasks.filter((task) => task.category === category));
    }
  };

  // Function to add a new task
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setFilteredTasks([...filteredTasks, newTask]);
  };

  return (
    <div>
      {/* Category filter */}
      <CategoryFilter categories={categories} onCategorySelect={filterTasks} />

      {/* Task list */}
      <TaskList tasks={filteredTasks} onDelete={deleteTask} />

      {/* New task form */}
      <NewTaskForm categories={categories} onTaskFormSubmit={addTask} />
    </div>
  );
}

export default App;