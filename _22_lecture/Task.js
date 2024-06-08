1: Task.js: This component can display individual tasks within the todo list.

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
