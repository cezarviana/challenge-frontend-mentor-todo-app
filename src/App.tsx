import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import { TodoContainer } from './components/TodoContainer';
import { useTodo } from './hooks/useTodo';
import IconReload from "/images/icon-reload.png";


function App() {

  const {
    addTodo,
    toggleTodoCompleted,
    filteredTodos,
    filter,
    setFilter,
    clearCompleted,
    removeTodo,
    refresh,
    setRefresh
  } = useTodo();

  return (

    <TodoContainer>

      <TodoHeader></TodoHeader>

      <TodoForm addTodo={addTodo}></TodoForm>

      <TodoList
        todoList={filteredTodos}
        toggleTodoCompleted={toggleTodoCompleted}
        setFilter={setFilter}
        filter={filter}
        clearCompleted={clearCompleted}
        removeTodo={removeTodo}
      ></TodoList>

      <button onClick={() => setRefresh(!refresh)}>
        <img src={ IconReload } alt="ícone de recarga" className='w-6 m-2 cursor-pointer hover:opacity-50 bg-gray-400 rounded-full p-1'/>
        </button>
      {/* <p className='text-cyan-50'>Status do refresh: {refresh.toString()}</p> */}

    </TodoContainer>

  )
}

export default App
