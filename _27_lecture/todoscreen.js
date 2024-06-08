1:  todoscreen.js:
* Manages the overall todo list.
* Consumes the TaskContext using useContext to access tasks and setTasks.
* Fetches tasks from the backend on component mount (potentially moved to TaskProvider if applicable).
* Renders the list of tasks using the Task component, passing each task object as a prop.
* Provides functionality for deleting tasks (likely using a separate API call to the backend).

2: Example (todoscreen.js):

import React, { useContext, useState, useEffect } from 'react';
import { TaskContext } from './taskcontext';
import Task from './task';

const TodoScreen = () => {
  const { tasks, setTasks } = useContext(TaskContext);

  const handleDelete = async (id) => {
    try {
      await deleteTask(id); // Assuming deleteTask API function
      setTasks(tasks.filter((task) => task._id !== id)); // Update tasks after deletion
    } catch (error) {
      console.error('Error deleting task:', error);
      // Handle errors appropriately (e.g., display error message to user)
    }
  };

  return (
    <div className="todo-
