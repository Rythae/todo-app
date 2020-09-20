import React from 'react'
import "./todo-list.scss"
import Todo from "./todo"

const Todolist = (props) => {
    const todos = props.items.map((todo, index) => {
        return (
          <Todo
            item={todo}
            key={index}
            id={index}
            deleteItem={props.deleteItem}
          />
        );
    })
    return <div className="todo-list-wrapper">{todos}</div>;
}

export default Todolist