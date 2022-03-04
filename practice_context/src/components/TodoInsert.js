// TodoInsert.js;
import React, { useContext, useState } from "react";
import { Todocontext } from "../App";

const TodoInsert = () => {
  const { todoValue, todoSetValue, onChange } = useContext(Todocontext);
  return (
    <form>
      <input
        onChange={onChange}
        value={todoValue}
        placeholder="할일을 입력하세요"
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoInsert;
