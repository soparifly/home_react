// TodoTemplate.jsx

import React from 'react'

const TodoTemplate = ({ children }) => {
    return (
        <div className='todoTemplate'>
            <div className='app-title'>일정관리</div>
            <div className='contents'>{children}</div>
        </div>
    )
}

export default TodoTemplate
