// Tab.jsx

import React, { useState } from 'react'

const Tab = () => {

    const [tab, setTab] = useState(0);



    return (
        <div>Tab
            <button onClick={() => {
                setTab(0);
            }}></button>
            <button onClick={() => {
                setTab(1);
            }}></button>
            <button onClick={() => {
                setTab(2);
            }}></button>
            <Tabcomponent />
        </div>
    )
}

function Tabcomponent(tab) {
    if (tab === 0) {
        return <div>0번째내용</div>
    } if (tab === 1) {
        return <div>0번째내용</div>
    } if (tab === 2) {
        return <div>0번째내용</div>
    }
}
export default Tab
