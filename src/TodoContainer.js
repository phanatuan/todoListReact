import React from 'react';
import AddTodo from './AddTodo';
import TodoFilter from './TodoFilter';
import TodoList from './TodoList';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterType: 'All',
      todos: [
        {
          id: 0,
          content: 'Hello',
          isDone: false
        },
        {
          id: 1,
          content: 'CoderSchool',
          isDone: true
        }
      ],
      todoInput: ''
    };
  }

  handleInput = e => {
    this.setState({
      todoInput: e.target.value
    });
  };

  addTodo = () => {
    this.setState(
      {
        todos: [
          ...this.state.todos,
          {
            id: this.state.todos.length,
            content: this.state.todoInput,
            isDone: false
          }
        ],
        todoInput: ''
      },
      () => console.log(this.state)
    );
  };

  removeTodo = id => e => {
    e.preventDefault();
    console.log(id);
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id)
    }));
  };

  toggleDone = id => e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      })
    });
  };

  handleFilter = e => {
    e.preventDefault();
    this.setState({
      filterType: e.target.name
    });
  };

  render() {
    let renderTodos;
    switch (this.state.filterType) {
      case 'All':
        renderTodos = this.state.todos;
        break;
      case 'Active':
        renderTodos = this.state.todos.filter(todo => !todo.isDone);
        break;
      case 'Completed':
        renderTodos = this.state.todos.filter(todo => todo.isDone);
        break;
      default:
        console.log('I am not ready to handle this case');
    }
    return (
      <>
        <h1>Todo List of Tuan</h1>
        <AddTodo
          todoInput={this.state.todoInput}
          handleInput={this.handleInput}
          addTodo={this.addTodo}
        />
        <TodoList
          todos={renderTodos}
          removeTodo={this.removeTodo}
          toggleDone={this.toggleDone}
        />
        <TodoFilter handleFilter={this.handleFilter} />
      </>
    );
  }
}

export default TodoContainer;
