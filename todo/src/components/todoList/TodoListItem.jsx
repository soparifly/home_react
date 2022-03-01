// TodoListItem.jsx
//TodoListItem.css
import React from 'react';
// import 'TodoListItem.css';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
    const { id, text, checked } = todo;

    return (
        <>
            <div key={id} onClick={() => onToggle(id)}> {checked ? "할일" : "못함"}</div>
            <div>{text}</div>
            <div onClick={() => onRemove(id)}> ㅁ </div>
        </>
    )
}

export default React.memo(TodoListItem);

/**
 * react.memo 컴포넌트의 리렌더링을 방지 
 * 컴포넌트의 props가 바뀌지않는다면 리렌더링이 되지않도록 함수컴포넌트의 리런데링 최적화
 * 
 * 리렌더링 발생조건 
 * 1. 자신이 전달받은 props가 변경될때
 * 2. 자신의 state가 바뀔때
 * 3. 부모컴포넌트가 리렌더링 될때
 * 4. forceUpdate 함수가 실행될때 
 */