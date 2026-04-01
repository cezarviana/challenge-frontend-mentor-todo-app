import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import { TodoContainer } from './components/TodoContainer';


export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {

  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.target.value);

    const formData = new FormData(event.currentTarget);
    const todoItem = formData.get("todo") as string;

    if (!todoItem.trim()) return

    setTodoList(prev => [...prev, {
      id: Date.now(),
      text: todoItem,
      completed: false
    }]);
  }

  const toggleTodoCompleted = (id: number) => {

    console.log(id);


    const newTodoList = todoList.map(todo => {
      if(id === todo.id) {
        const completed = !todo.completed;

        return {
          ...todo,
          completed,
        };
      }

      return todo;

    });

    setTodoList(newTodoList);

  };

  return (

    <TodoContainer>

      <TodoHeader></TodoHeader>

      <TodoForm addTodo={addTodo}></TodoForm>

      <TodoList todoList={todoList} toggleTodoCompleted={toggleTodoCompleted}></TodoList>

    </TodoContainer>

  )
}

export default App
