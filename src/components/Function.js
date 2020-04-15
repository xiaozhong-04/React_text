import React, { useState } from 'react'

function Todo() {
    const [list, setList] = useState([])

    // 添加数据
    function add(value) {
        if (value === "") return
        let todo = {
            value,
            checked: false
        }
        setList([...list, todo])
    }

    // 修改某一条记录
    function setChecked(index, value) {
        let listClone = [...list]
        listClone[index].checked = value
        setList(listClone)
    }

    // 全选
    function selAll() {
        let listClone = [...list]
        listClone.forEach(v => v.checked = true)
        setList(listClone)
    }

    // 删除
    function del() {
        let newList = list.filter(v => !v.checked)
        setList(newList)
    }

    return <div>
        {/* 表单 */}
        <TodoForm add={add} />
        {/* 数据列表 */}
        <TodoUl list={list} setChecked={setChecked} />
        {/* 按钮 */}
        <TodoBtn selAll={selAll} del={del} />
    </div>
}

function TodoForm({ add }) {
    const [value, setValue] = useState('')
    return <div>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="请输入内容~~~" />
        <button onClick={() => { add(value); setValue('') }}>添加</button>
    </div>
}

function TodoUl({ list, setChecked }) {
    return <ul>
        {list.map((v, k) => <TodoLi key={k} k={k} data={v} setChecked={setChecked} />)}
    </ul>
}

function TodoLi({ data, setChecked, k }) {
    return <li>
        <input type="checkbox" onChange={e => { setChecked(k, e.target.checked) }} checked={data.checked} />{data.value}
    </li>
}

function TodoBtn({ selAll, del }) {
    return <div>
        <button onClick={selAll}>全选</button>
        <button onClick={del}>删除所选</button>
    </div>
}


export default function Function() {
    return (
        <div>
            <h1>函数组件:</h1>
            <Todo />
        </div>
    )
}
