import React, { useRef, useCallback, useReducer } from 'react'

import TodoTemplate from './components/template/TodoTemplate'
import TodoInsert from './components/TodoInsert/TodoInsert';
import TodoList from './components/todoList/TodoList';
function todoReducer(todos, action) {
  switch (action.type) {
    case "INSERT": //새로 추가
      //  {type :'INSERT', todo: {id :1 , text:'todo',checked:false}}
      return todos.concat(action.todo);
    case "REMOVE": //제거
      //{type : 'REMOVE', id:1 }
      return todos.filter(todo => todo.id !== action.id);
    case "TOGGLE"://토글
      return todos.map(todo => todo.id === action.id ? { ...todo, checked: !todo.checked } : todo);

    default:
      return todos;
  }

}

function App() {

  const [todos, dispatch] = useReducer(todoReducer, undefined);

  const nextId = useRef(1);

  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    }
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1;
  }, []);

  const onRemove = useCallback(id => {
    dispatch({ type: "REMOVE", id })
  }, []);


  const onToggle = useCallback(id => {
    dispatch({ type: "TOGGLE", id })
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
