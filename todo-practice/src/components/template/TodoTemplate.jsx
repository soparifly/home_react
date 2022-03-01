// TodoTemplate.jsx
import React from 'react'

const TodoTemplate = ({ children }) => {
    return (
        <>
            <h1 className='title'>일정관리</h1>
            <div className='centents'>{children}</div>
        </>
    )
}

export default TodoTemplate


