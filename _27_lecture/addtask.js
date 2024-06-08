import React, { useState, useContext } from 'react';
import { TaskContext } from './taskcontext'; // Import TaskContext

const AddTask = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState(null); // Optional for date input

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTask = {
        text: task,
        dueDate, // Optional
      };
      const response = await createTask(newTask); // Assuming createTask API function
      setTasks([...tasks, response.data]); // Update tasks with new task (replace with actual update logic)
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
