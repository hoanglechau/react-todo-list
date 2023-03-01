import * as React from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = React.useState([
    {
      id: "task_1",
      title: "Learn ReactJS",
      status: 0,
    },
  ]);
  const [hideCompleted, setHideCompleted] = React.useState(false);
  const [newTask, setNewTask] = React.useState("");

  return (
    <div className="container">
      <h1 className="title">
        Todo List <span>Get one item done at a time</span>
      </h1>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.status ? "done" : ""}>
            <span className="label">{task.title}</span>
            <div className="actions">
              <input type="checkbox" className="btn-action btn-action-done" />
              <button className="btn-action btn-action-delete">❌</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="filter-wrapper">
        <label htmlFor="filter" className="filter-label">
          Hide completed tasks
        </label>
        <input type="checkbox" id="filter" checked={hideCompleted} />
      </div>
      <form action="#" className="form">
        <label htmlFor="newItem">Add to the TODO list</label>
        <input type="text" id="newItem" value={newTask} />
        <button type="submit">Add item</button>
      </form>
    </div>
  );
}

export default App;
