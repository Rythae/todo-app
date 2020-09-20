import React from "react";
import "./view-todo.scss";

const ViewTodo = (props) => {
  return (
    <div className="view-todo-wrapper">
      <h1 className="view-heading">View todo</h1>
      <div className=" col-12 col-sm-12 col-md-8 col-md-6 mx-auto outer-container">
        <div className="view-heading"></div>
        <div className="inner-container mx-auto">
          <p className="todo-heading">Todo item</p>
          <p className="todo-text">{props.item}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewTodo;
