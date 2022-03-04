// TodoList.js;
import React, { useContext } from "react";
import { Todocontext } from "../App";

const TodoList = () => {
  const todos = useContext(Todocontext);
  return <div>{todos}</div>;
};

export default TodoList;
