import React from 'react';

const Task = ({ task }) => {
  return (
    <div className="task">
      <p>{task.text}</p>
      {task.dueDate && <p>Due Date: {task.dueDate.toString()}</p>} {/* Optional: Display due date */}
    </div>
  );
};

export default Task;


1: Explanation:
task.js doesn't directly handle events or state. It receives the task data as a prop from todoscreen.js and displays the task text and due date (if provided).
