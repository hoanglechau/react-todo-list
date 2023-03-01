import React from "react";

function AddTaskForm({ newTask, handleSubmit, handleInputChange }) {
  return (
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
  );
}

export default AddTaskForm;
