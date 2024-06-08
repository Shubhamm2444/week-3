1:  task.js:
Renders individual tasks within the todo list.
Receives task data as props from todoscreen.js.
Displays the task text and due date (if provided) in a user-friendly format.

  2: Example (task.js):

  const Task = ({ task }) => {
  return (
    <div className="task">
      <p>{task.text}</p>
      {task.dueDate && <p>Due Date: {task.dueDate.toString()}</p>} {/* Optional: Display due date */}
    </div>
  );
};

export default Task;
