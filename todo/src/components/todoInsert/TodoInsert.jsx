// TodoInsert.jsx
import React, { useCallback, useState } from 'react'

const TodoInsert = ({ onInsert }) => {

    const [value, setValue] = useState("");


    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue('');

        e.preventDefault();
    }, [onInsert, value]);



    return (
        <form onSubmit={onSubmit}>
            <input placeholder='할일' value={value} onChange={onChange} />
            <button type="submit">추가</button>
        </form>
    )
}

export default TodoInsert