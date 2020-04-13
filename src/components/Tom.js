import React, { Component } from 'react'

export default class Tom extends Component {
    // 组件创建时执行 (相当于 vue 中的created)
    constructor(props) {
        super(props)

        this.state = {
            now: Date.now()
        }
    }

    // 组件加载完之后执行
    componentDidMount() {
        this.inter = setInterval(() => {
            this.setState({
                now: Date.now()
            })
        }, 1000)
    }

    // 组件卸载时执行  销毁时清楚定时器
    componentWillUnmount() {
        clearInterval(this.inter)
    }

    render() {
        return (
            <div>
                当前时间: {this.state.now}
            </div>
        )
    }
}
