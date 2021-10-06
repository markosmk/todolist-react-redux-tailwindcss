import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

export default function AddItem() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  // actualizamos el valor del input al estado "task"
  const handleTask = (e) => {
    setTask(e.target.value);
  };

  // utilizamos dispatch para pasar el nuevo objeto al
  // estado general(store) de redux
  const handleSubmit = () => {
    if (!task) return;
    const newTask = {
      id: nanoid(4),
      text: task,
      complete: false,
      date: Date.now(),
    };
    dispatch({ type: 'ADD_TASK', payload: newTask });
  };
  //console.log('valor de task', task);
  return (
    <div className="border rounded-lg p-6">
      <h4>Create New Task</h4>
      <input type="text" value={task} onChange={(e) => handleTask(e)} />
      <button disabled={!task} onClick={handleSubmit}>
        Add Item
      </button>
    </div>
  );
}
