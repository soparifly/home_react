import { useCallback, useRef, useReducer } from "react";
import TodoTemplate from "./components/template/TodoTemplate";
import TodoInsert from "./components/todoInsert/TodoInsert";
import TodoList from "./components/todoList/TodoList";
function creatBulkTodos() {

  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할일 ${i}`,
      checked: false,
    })
  }
  return array
}


function todoReducer(todos, action) {
  switch (action.type) {
    case "INSERT": //새로추가 
      //{type : "INSERT", todo: {id :  1, text : 'todo', checked: false }}
      return todos.concat(action.todo);
    case "REMOVE":
      // {type : "REMOVE", id :1 }
      return todos.filter(todo => todo.id !== action.id);
    case "TOGGLE":
      // {type :"TOGGLE",id:1 }
      //불변성
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo)
    default:
      return todos;
  }
}

function App() {
  /**
   * 1번째 인자 todoReducer 스위치문
   * 2번째 파라미터의 초기상태 넣어야하지만 undefined 넣고 
   * 3번째 초기상태 렌더링 될때만 createBulkTodos 함수 호출
   */
  const [todos, dispatch] = useReducer(todoReducer, undefined, creatBulkTodos);

  // const [todos, setTodos] = useState(creatBulkTodos);

  const nextId = useRef(2501);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      dispatch({ type: "INSERT", todo });
      nextId.current += 1;
    },
    []
  );
  const onRemove = useCallback(
    id => {
      dispatch({ type: "REMOVE", id });

    }, []
  );

  const onToggle = useCallback(
    id => {
      dispatch({ type: "TOGGLE", id })
    }, []
  )



  return (
    <div className="App">
      <TodoTemplate >
        <TodoInsert todos={todos} onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </div>
  );
}

export default App;
