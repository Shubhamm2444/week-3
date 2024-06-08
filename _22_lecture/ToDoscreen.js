1: ToDoscreen.js: This component will manage the overall todo list, including rendering AddTask and Task components.

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
        {tasks.map((task) => (
          <li key={task._id}>
            <Task task={task} />
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoScreen;
