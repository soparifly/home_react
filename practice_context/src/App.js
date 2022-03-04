import React, { useState, useCallback, useContext } from "react";
import TodoInsert from "./components/TodoInsert";

export const Todocontext = React.createContext();

function App() {
  const [todos, setTodos] = useState({
    id: 0,
    contents: "",
    checked: false,
  });

  const [todoValue, todoSetValue] = useState("");

  const onInsert = useCallback((e) => {
    console.log(todos);
    setTodos("");
  }, []);
  const onChange = useCallback((e) => {
    setTodos(e.target.value);
  }, []);
  const onRemove = useCallback(() => {}, []);
  const onToggle = useCallback(() => {}, []);
  return (
    <>
      <Todocontext.Provider
        value={(todos, onInsert, onChange, todoValue, todoSetValue)}
      >
        <TodoInsert />
        {/* <TodoList /> */}
        {/* </TodoTemplate> */}
      </Todocontext.Provider>
    </>
  );
}

export default App;
