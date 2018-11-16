import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

let id = 0

const Todo = props => (
  <li>
  <input type="checkbox" />
  <span>{props.todo.text}</span>
  <button onClick={props.onDelete}>Delete</button>
  </li>
)

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }
    this.addToDo = this.addToDo.bind(this)
    this.addToDo = this.removeToDo.bind(this)
  }

  addToDo() {
    const text = prompt("Enter Todo")
    this.setState({
      todos: [...this.state.todos, {id: id++, text:text}]
    })
  }
  removeToDo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }
  render() {
    return (
      <div className="App">
      <ul>
        <h1>I love Doreen Mei </h1>
        <button onClick={this.addToDo}>Add a Todo</button>
      {this.state.todos.map(todo => <Todo todo={todo} onDelete={} />)}
      </ul>
      </div>
    );
  } 
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
