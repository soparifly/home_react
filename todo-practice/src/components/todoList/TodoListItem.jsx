import React from 'react'

const TodoListItem = ({ todo, onRemove, onToggle }) => {
    const { id, text, checked } = todo;

    return (
        <div className='TodoItem-virtualized'>
            <div onClick={() => onToggle(id)}>{checked ? "할일" : "아직안함"}</div>
            <div>{text}</div>
            <div onClicke={() => onRemove(id)}></div>

        </div>
    )
}

export default React.memo(TodoListItem);