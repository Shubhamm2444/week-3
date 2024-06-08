1: Addtask.js: This component will handle user input for adding a new task.

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
      await addTask(newTask); // Call API function to add task
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
      {dueDate && <p>Due Date: {dueDate.toString()}</p>} {/* Optional: Display due date */}
      <button type="submit">Add Task</button>
      {/* Optional: Date input component (dateunit.js) */}
    </form>
  );
};

export default AddTask;
