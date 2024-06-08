import React, { useState } from 'react';
import { addTask } from '../api/tasks'; // Import API call function

const AddTask = () => {
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState(null); // Optional for date input

  const handleChange = (e) => { // Single handler for both task and dueDate
    const { name, value } = e.target; // Destructure name and value from event object
    if (name === 'task') {
      setTask(value);
    } else if (name === 'dueDate') {
      setDueDate(new Date(value)); // Assuming date format from datepicker
    }
  };

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
        value={task} // Bind state value to input value
        onChange={handleChange}
        name="task" // Assign a name for identification
        required
      />
      {/* ... other input fields and dateunit (if applicable) */}
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;


1: Explanation:
We use useState to manage task and dueDate state variables.
The handleChange function handles changes to both the task input and the date input (if applicable). It uses destructuring to access the name and value properties from the event object. Based on the name, it updates either the task or dueDate state.
The handleSubmit function is triggered on form submission. It uses the state values to create a new task object and sends it to the backend.
