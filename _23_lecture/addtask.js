import React, { useState } from 'react';
import { addTask } from '../api/tasks'; // Import API call function

const AddTask = () => {
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState(null); // Optional for date input

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTask = {
        text: task,
        dueDate, // Optional
      };
      await addTask(newTask);
      setTask(''); // Clear input field
      setDueDate(null); // Optional: Clear date input
    } catch (error) {
      console.error('Error adding task:', error);
      // Handle errors appropriately (e.g., display error message to user)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task description"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      {/* ... other input fields and dateunit (if applicable) */}
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;


1:Remember:
This is a simplified example. Your actual event handling might be more complex depending on your application's functionality.
Implement proper error handling on both frontend and backend for a robust user experience.

  // By effectively handling events in your React MERN stack application, you can create a dynamic and interactive user interface that responds to user interactions and updates the application state accordingly.
