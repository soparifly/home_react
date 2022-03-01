// List.jsx
import React, { useContext } from 'react'
import { 범위context } from '../App';

const List = () => {

    const log = useContext(범위context);
    const list = log.map((item) => {
        return (
            <ul>
                <li key={item.id}>{item.id}</li>
                <li>{item.title}</li>
                <li>{item.content}</li>
                <li>{item.price}</li>
            </ul>
        )
    })
    return <div>{list}
    
    </div>

}

export default List

