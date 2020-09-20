import React, { Component } from "react";
import "./todo-form.scss"


class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { text } = this.state;
    if (text === "") return;
    this.props.addItem(this.state.text);
    this.setState({ text: "" });
  }

  render() {
    return (
      <div className="container simple-todo">
        <div className="col-12 col-sm-12 col-md-6 col-lg-12">
          <div className="todo-container">
            <form className="todo-header" onSubmit={this.handleSubmit}>
              <div className="heading-primary">
                <h4 className="heading-text">My Todo App</h4>
              </div>
              <input
                type="text"
                className="text-input"
                placeholder="What do you want to do today ?"
                value={this.state.text}
                onChange={this.handleInputChange}
              />
              <button type="submit" className="btn btn-primary btn-lg">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

    export default TodoForm;