import React, { Component } from 'react'

class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // 数据
            list: []
        }
    }


    // 添加
    add = (value) => {
        // 如果为空就退出,不添加
        if (value === "") return
        let todo = {
            value,
            checked: false
        }
        this.setState({
            list: [...this.state.list, todo]
        })
    }

    // 修改某一项的记录
    setChecked = (index, value) => {
        let listClone = [...this.state.list]
        listClone[index].checked = value
        this.setState({
            list: listClone
        })
    }

    // 全选
    selAll = () => {
        let listClone = [...this.state.list]
        listClone.forEach(v => v.checked = true)
        this.setState({
            list: listClone
        })
    }

    // 删除所选
    del = () => {
        let listClone = [...this.state.list].filter(v => !v.checked)
        this.setState({
            list: listClone
        })
    }

    render() {
        return <div>
            {/* 表单 */}
            <TodoForm add={this.add} />
            {/* 数据 */}
            <TodoUl list={this.state.list} setChecked={this.setChecked} />
            {/* 按钮 */}
            <TodoBtn selAll={this.selAll} del={this.del} />
        </div>
    }
}

class TodoForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }
    }
    value = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    onAdd = () => {
        this.props.add(this.state.value)
        this.setState({
            value: ''
        })
    }
    render() {
        return <div>
            <input type="text"
                value={this.state.value}
                onChange={this.value}
                placeholder="请输入内容~~~" />
            <button onClick={this.onAdd}>添加</button>
        </div>
    }
}

class TodoUl extends Component {
    render() {
        return <ul>
            {this.props.list.map((v, k) => <TodoLi key={k} data={v} k={k} setChecked={this.props.setChecked} />)}

        </ul>
    }
}

class TodoLi extends Component {
    render() {
        return <li>
            <input type="checkbox" checked={this.props.data.checked} onChange={e => {
                this.props.setChecked(this.props.k, e.target.checked)
            }} />{this.props.data.value}
        </li>
    }
}

class TodoBtn extends Component {
    render() {
        return <div>
            <button onClick={this.props.selAll}>全选</button>
            <button onClick={this.props.del}>删除所选</button>
        </div>
    }
}

export default class Class extends Component {
    render() {
        return (
            <div>
                <h1>类组件:</h1>
                <Todo />
            </div>
        )
    }
}
