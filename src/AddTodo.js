import React from 'react';

const AddTodo = props => {
  let { todoInput, handleInput, addTodo } = props;
  return (
    <div>
      <input value={todoInput} onChange={handleInput} />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default AddTodo;
