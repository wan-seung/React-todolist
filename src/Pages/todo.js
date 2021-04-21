import React from 'react';
import TodoList from '../Components/TodoList';
import TodoItem from '../Components/TodoItem';
import TodoInput from '../Components/TodoInput';

function Todo() {
  return (
    <div>
      <TodoList />
      <TodoItem />
      <TodoInput />
    </div>
  );
}

export default Todo;
