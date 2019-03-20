import React from 'react';
import './TodoItem.css';

const TodoItem = props => {
  let { isDone, content, id } = props.todo;
  let { toggleDone, removeTodo } = props;

  return (
    <li key={id} className={isDone ? 'done' : ''}>
      {content}{' '}
      <a href="" onClick={removeTodo(id)}>
        x
      </a>
      <a href="" onClick={toggleDone(id)}>
        {isDone ? 'Done' : 'Not Yet'}{' '}
      </a>
    </li>
  );
};

export default TodoItem;
