import React from "react";
import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  hideCompleted,
  setTaskStatus,
  removeTask,
  handleHideCompleted,
}) {
  return (
    <>
      <ul className="task-list">
        {tasks
          .filter((task) => (hideCompleted ? task.status !== true : true))
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              setTaskStatus={setTaskStatus}
              removeTask={removeTask}
            />
          ))}
      </ul>
      <div className="filter-wrapper">
        <label htmlFor="filter" className="filter-label">
          Hide completed tasks
        </label>
        <input
          type="checkbox"
          id="filter"
          checked={hideCompleted}
          onChange={handleHideCompleted}
        />
      </div>
    </>
  );
}

export default TaskList;
