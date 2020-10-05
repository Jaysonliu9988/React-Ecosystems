import React from "react";

const TodoListItem = ({ todo }) => (
  <div className="todo-item-container">
    <h3>{todo.text}</h3>
    <div className="buttons-containe">
      <button className="compelted-button">Mark As Completed</button>
      <button className="remove-button">Remove</button>
    </div>
  </div>
);


export default TodoListItem;