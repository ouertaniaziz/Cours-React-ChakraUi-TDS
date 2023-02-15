import React from "react";

const TaskList = () => {
  const tasks = ["Tâche 1", "Tâche 2", "Tâche 3"];

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
};

export default TaskList;
