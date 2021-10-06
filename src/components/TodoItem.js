import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function TodoItem({ task }) {
  const [editable, setEditable] = useState(false);
  const [taskUpdate, setTaskUpdate] = useState(task);
  const dispatch = useDispatch();

  const handleDelete = (task) => {
    console.log('Eliminado ', task.id);
    dispatch({ type: 'DELETE_TASK', payload: task.id });
  };

  const handleFormEdit = () => {
    setEditable(true);
  };

  const handleEdit = (taskEdited) => {
    //console.log(taskEdited);
    dispatch({ type: 'UPDATE_TASK', payload: taskEdited });
    setEditable(false);
  };

  const handleCompleted = (taskStatus) => {
    //console.log('Is completed?', !taskStatus.complete);
    setTaskUpdate({ ...taskStatus, complete: !taskStatus.complete });
    const updated = { ...taskStatus, complete: !taskStatus.complete };
    //console.log('Status', updated);
    dispatch({ type: 'COMPLETED', payload: updated });
  };

  return (
    <>
      <div className="flex w-full border rounded-lg p-4 mt-2">
        {/** Shoe Task */}
        {!editable && (
          <>
            <h4
              className={taskUpdate.complete ? 'line-through text-gray-300' : undefined}
            >
              {task.text}
            </h4>
            <div className="flex-1 text-right">
              <button disabled={taskUpdate.complete} onClick={() => handleFormEdit()}>
                Edit
              </button>
              <button onClick={() => handleDelete(task)}>Delete</button>
              <button onClick={() => handleCompleted(taskUpdate)}>
                {taskUpdate.complete ? 'Incomplete' : 'Completed'}
              </button>
            </div>
          </>
        )}
        {/** Form for edit changes */}
        {editable && (
          <div className="flex w-full">
            <input
              type="text"
              value={taskUpdate.text}
              onChange={(e) => setTaskUpdate({ ...taskUpdate, text: e.target.value })}
              className="flex-1"
            />
            <div className="flex-1 text-right">
              <button onClick={() => handleEdit(taskUpdate)}>Save</button>
              <button onClick={() => setEditable(false)}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
