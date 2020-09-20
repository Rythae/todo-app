import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./todo.scss"

const Todo = (props) => {
  return (
    <div className="todo-container">
      <div className="col-12 col-sm-12 col-md-6 col-lg-6 mx-auto">
        <div className="todo-list-container">
          <div className="print-container">
            <div className="square"></div>
            <p className="print">{props.item}</p>
          </div>
          <div className="right-items">
            <div onClick={() => props.history.push(`/view-todo/${props.id}`)}>
              <Link to="" className="view-todo">
                <a href="" className="view-todo">
                  <span className="todo">View todo</span>
                </a>
              </Link>
            </div>
            <div
              onClick={() => {
                props.deleteItem(props.id);
              }}
            >
              <img
                className="cancel-icon"
                src="/assets/svg/clear.svg"
                alt="cancel icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Todo);
