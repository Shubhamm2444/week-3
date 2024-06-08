import React, { useState, useEffect } from 'react';
import { getTasks, deleteTask } from '../api/tasks'; // Import API call functions
import AddTask from './addtask';
import Task from './task';

const TodoScreen = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
    };
    fetchTasks();
  }, []); // Empty dependency array: Fetch tasks only once on component mount

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      const remainingTasks = tasks.filter((task) => task._id !== id);
      setTasks(remainingTasks);
    } catch (error) {
      console.error('Error deleting task:', error);
      // Handle errors appropriately (e.g., display error message to user)
    }
  };

  return (
    <div className="todo-screen">
      <h1>Todo List</h1>
      <AddTask />
      <ul>
        {tasks


1: Overall Functionality:
This code snippet from todoscreen.js manages the main view of your todo list application. It:
Fetches existing tasks from the backend on component mount.
Stores the fetched data in the state variable tasks.
Renders a list of tasks using the `Task.
