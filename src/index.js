import React from 'react';
import { Provider } from 'react-redux';
import { configStore } from './store/store.js';
import ReactDOM from 'react-dom';
import ToDoList from './components/ToDoList/ToDoList';


ReactDOM.render(
  <Provider store = {configStore()}>
    <ToDoList/>
  </Provider>,
  document.getElementById('root')

);
