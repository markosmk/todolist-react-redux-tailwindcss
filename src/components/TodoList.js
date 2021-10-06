import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

export default function TodoList() {
  const taskObject = useSelector((store) => store);

  //console.log('TodoList', taskObject);
  // ordenamos los mas recientes primero
  const items = taskObject.allItems
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map((task) => {
      return <TodoItem key={task.id} task={task} />;
    });

  return <>{items}</>;
}
