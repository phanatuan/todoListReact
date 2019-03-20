import React from 'react';
import TodoItem from './TodoItem';

const TodoList = props => {
  let { todos } = props;
  const renderTodo = todos.map(todo => (
    <TodoItem
      todo={todo}
      key={todo.id}
      removeTodo={props.removeTodo}
      toggleDone={props.toggleDone}
    />
  ));

  return <ul>{renderTodo}</ul>;
};

export default TodoList;
