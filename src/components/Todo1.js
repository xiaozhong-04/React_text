import React from 'react'

const data = {
    list: []
}

function reducer(state, action) {
    const clone = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        // 添加
        case "add":
            if (action.title === "") return clone
            let todo = {
                title: action.title,
                checked: false
            }
            clone.list.push(todo)
            break;
        // 勾选
        case "alter":
            clone.list[action.index].checked = !clone.list[action.index].checked
            break;
        // 删除
        case "del":
            clone.list = clone.list.filter(v => !v.checked)
            break;
        // 全选
        case "selAll":
            clone.list.forEach(v => v.checked = true);
            break;
        default:
            break;
    }

    return clone
}

// 定义共享数据组件
const ListContext = React.createContext()

function Todo() {
    const [state, dispatch] = React.useReducer(reducer, data)
    return <div>
        <ListContext.Provider value={{ state, dispatch }}>
            {/* 表单 */}
            <TodoForm />
            {/* 数据 */}
            <TodoUl />
            {/* 按钮 */}
            <TodoBtn />
        </ListContext.Provider>
    </div>
}


function TodoForm() {
    const { dispatch } = React.useContext(ListContext)
    const listFrom = React.useRef()
    return <div>
        <input type="text" ref={listFrom} placeholder="请输入内容~" />
        <button onClick={() => { dispatch({ type: "add", title: listFrom.current.value }); listFrom.current.value = "" }}>添加</button>
    </div>
}


function TodoUl() {
    const { state } = React.useContext(ListContext)
    return <ul>
        {state.list.map((v, k) => <TodoLi key={k} data={v} k={k} />)}
    </ul>
}

function TodoLi({ k, data }) {
    const { dispatch } = React.useContext(ListContext)
    return <li>
        <input type="checkbox" checked={data.checked} onChange={() => { dispatch({ type: "alter", index: k }) }} />{data.title}
    </li>
}

function TodoBtn() {
    const { dispatch } = React.useContext(ListContext)
    return <div>
        <button onClick={() => (dispatch({ type: "selAll" }))}>全选</button>
        <button onClick={() => (dispatch({ type: "del" }))}>删除所选</button>
    </div>
}


export default function Todo1() {
    return (
        <div>
            <h1>Todo案例</h1>
            <span>使用useReducer  useRef  useContext</span>
            <Todo />
        </div>
    )
}
