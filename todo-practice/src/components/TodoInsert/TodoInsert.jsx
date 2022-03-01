// TodoInsert.jsx
import React from 'react'
import { useState, useCallback } from 'react'

const TodoInsert = ({ onInsert }) => {

    const [value, setValue] = useState("");

    const onChange = useCallback(e => {
        setValue(e.target.value)
    }, [])

    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue("");

        e.preventDefault();
    }, [onInsert, value])
    return (
        <form onSubmit={onSubmit}>
            <input value={value} onChange={onChange} placeholder="할일입력" />
        </form>
    )
}

export default TodoInsert