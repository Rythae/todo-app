import React, { Component } from "react";
import TodoForm from "./todo-form";
import Todolist from "./todo-list";


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  addItem = (item) => {
    this.setState({
      items: [...this.state.items, item],
    });
  };

  deleteItem = (index) => {
    const newItems = [...this.state.items];
    newItems.splice(index, 1);
    this.setState({
      items: newItems,
    });
  };

  render() {
    return (
        <div>
          <TodoForm addItem={this.addItem} />
          <Todolist items={this.state.items} deleteItem={this.deleteItem} />
        </div>
    );
  }
}

export default HomePage;
