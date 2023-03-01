import * as React from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = React.useState([
    {
      id: "task_1",
      title: "Learn ReactJS",
      status: false,
    },
  ]);
  const [hideCompleted, setHideCompleted] = React.useState(false);
  const [newTask, setNewTask] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      const task = {
        id: Date.now(),
        title: newTask,
        status: false,
      };
      setTasks((prevTasks) => [...prevTasks, task]);
      setNewTask((prevNewTask) => "");
    }
  };

  const handleInputChange = (e) => {
    setNewTask((prevNewTask) => e.target.value);
  };

  const handleHideCompleted = (e) => {
    setHideCompleted((prevHideCompleted) => e.target.checked);
  };

  const setTaskStatus = (taskId, status) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status };
        }
        return task;
      })
    );
  };

  const removeTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container">
      <h1 className="title">
        Todo List <span>Get one item done at a time</span>
      </h1>
      <ul className="task-list">
        {tasks
          .filter((task) => (hideCompleted ? task.status !== true : true))
          .map((task) => (
            <li key={task.id} className={task.status ? "done" : ""}>
              <span className="label">{task.title}</span>
              <div className="actions">
                <input
                  type="checkbox"
                  className="btn-action btn-action-done"
                  checked={task.status}
                  onChange={(e) => setTaskStatus(task.id, e.target.checked)}
                />
                <button
                  className="btn-action btn-action-delete"
                  onClick={() => removeTask(task.id)}
                >
                  ❌
                </button>
              </div>
            </li>
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
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="newItem">Add to the TODO list</label>
        <input
          type="text"
          id="newItem"
          value={newTask}
          onChange={handleInputChange}
        />
        <button type="submit">Add item</button>
      </form>
    </div>
  );
}

export default App;
