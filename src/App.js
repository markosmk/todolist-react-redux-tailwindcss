import React from 'react';
import Navbar from './components/Navbar';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import taskReducer from './reducer/taskReducer';
import AddItem from './components/AddItem';
import TodoList from './components/TodoList';

function App() {
  const store = createStore(taskReducer);
  return (
    <>
      <div className="text-center container">
        <Provider store={store}>
          <h1>Redux Todo List</h1>
          <Navbar />
          <AddItem />
          <TodoList />
        </Provider>
      </div>
    </>
  );
}

export default App;
