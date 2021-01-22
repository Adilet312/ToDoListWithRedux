import React from 'react';
import { Provider } from 'react-redux';
import { configStore } from './store/store.js';
import ReactDOM from 'react-dom';
import ToDoList from './components/ToDoList/ToDoList';


ReactDOM.render(
  <Provider>
    <ToDoList store = {configStore()}/>
  </Provider>,
  document.getElementById('root')

);
