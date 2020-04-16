import React, { useReducer, useRef } from 'react'

const data = {
    list: []
}

function reducer(state, action) {
    let clone = JSON.parse(JSON.stringify(state))
    if (action.title === "") return clone
    switch (action.type) {
        case 'add':
            clone.list.push({
                title: action.title
            })
            break;
        case 'delect':
            clone.list.splice(action.index, 1)
            break;
        default:
            return;
    }
    return clone
}
export default function Todo() {

    const [state, dispatch] = useReducer(reducer, data)
    const titleRef = useRef()
    return (
        <div>
            <h1>使用 useReducer useRef 小案例</h1>
            <input ref={titleRef} type="text" placeholder="请输入内容~" />
            <button onClick={() => { dispatch({ type: "add", title: titleRef.current.value }); titleRef.current.value = "" }}>添加</button>
            <ul>
                {state.list.map((v, k) => { return <li key={k}>{v.title} --- <button onClick={() => { dispatch({ type: "delect", index: k }) }}>删除</button></li> })}
            </ul>
        </div >
    )
}
