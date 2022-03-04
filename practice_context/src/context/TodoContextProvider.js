import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useCallback,
} from "react";

const TodoContext = createContext();

export const useTodoContext = useContext(todoContext);

const TodoContextProvider = ({ children }) => {
  const [todo, setTodo] = useState({
    todo_id: 0,
    todo_contents: "",
    todo_checked: false,
  });

  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const nextId = useRef(1);

  const onChange = useCallback((e) => {
    setValue(e.target.value);
    setTodo({ ...todo, todo_content: value, todo_id: nextId.current });
  }, []);

  const onInsert = useCallback((text) => {
    setTodo(...todo, {
      todo_id: nextId.current + 1,
      todo_contents: text,
      todo_checked: false,
    });
  }, []);

  const onClick = useCallback((id) => {
    setTodos(todos.concat(todo));
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    setTodos(
      todos.filter((todo) => {
        todo.todo_id !== id;
      })
    );
  }, []);
  const propsData = {
    todo,
    todos,
    onChange,
    onInsert,
    onClick,
  };
  return <div></div>;
};

export default TodoContextProvider;
