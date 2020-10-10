import React from 'react';
import { hot } from 'react-hot-loader';
import TodoList from './todos/TodoList';
import './App.css';
import TodoListItem from './todos/TodoListItem';

const App = () => (
    <div className="App">
        <TodoList />
    </div>
);

export default hot(module)(App);