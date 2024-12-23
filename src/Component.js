import React, { useState } from 'react';
import deleteIcon from './delete.png';

export default function Component() {
  // Initial state: empty task list
  let [newTodo, updateNewTodo] = useState('');
  let [toDos, updateToDos] = useState([]);

  // Function to add a new task
  const addNewTodo = (todo) => {
    if (todo === '') {
      alert('Add a task');
    } else {
      const newToDo = {
        id: toDos.length + 1,
        task: todo,
      };
      updateToDos([...toDos, newToDo]); // Add the new task to the list
      updateNewTodo(''); // Clear the input field after adding
    }
  };

  // Function to delete a task
  const deleteTodo = (id) => {
    const updatedToDos = toDos.filter((todo) => todo.id !== id); // Remove task by id
    updateToDos(updatedToDos);
  };

  return (
    <div className="container mt-5 w-50">
      <h1 className="text-center">ToDo List Application</h1>
      <div className="input-group">
        <input
          className="form-control"
          type="text"
          onChange={(e) => updateNewTodo(e.target.value)} // Update input field value
          value={newTodo}
        />
        <button className="btn btn-primary" onClick={() => addNewTodo(newTodo)}>
          Add
        </button>
      </div>

      <ul className="list-group mt-3">
        {toDos.map((t) => {
          return (
            <li key={t.id} className="list-group-item d-flex justify-content-between align-items-center">
              {t.task}
              <button className="btn" onClick={() => deleteTodo(t.id)}>
                <img src={deleteIcon} alt="Delete" style={{ width: '20px', height: '20px' }} />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}