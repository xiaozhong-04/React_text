import React, { useState, useEffect } from 'react'

export default function Jack() {
    // 定义 state (使用 hooks 技术, hooks 特点: 都是以 use 开头的函数)
    // 参数: 初始化
    // 返回: 数组 (第一个元素: state 数据, 第二个元素: 修改state 的函数)
    const [now, setNow] = useState(Date.now())
    // 参数一: 回调函数
    // 参数二: 依赖的数据, 数组类型
    // 情况一: 不传: 依赖所有的数据,只要页面更新这个    回调函数就会调用
    // 情况二: 传空数组: 只在组件加载,销毁时调用,更新不调用
    // 情况三: 传了数据: 那么要传的数据更改时调用
    // 调用时机: 在组件加载时,销毁时,页面更新时

    // 只在组件加载,销毁时调用
    useEffect(() => {
        // 加载时调用
        let inter = setInterval(() => {
            setNow(Date.now())
        }, 1000)

        // 销毁时调用
        return () => {
            clearInterval(inter)
        }
    }, [])

    return (
        <div>
            当前时间: {now}
        </div>
    )
}
