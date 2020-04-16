import React from 'react'

let fs = new Set()
export default function Text1() {
    const [count, setCount] = React.useState(0)
    let abc = React.useCallback(() => { }, [])
    fs.add(abc)
    return (
        <div>
            <h1>使用useCallback 小案例</h1>
            fs集合函数的个数: {fs.size}
            <br />
            可能某些函数使用依赖某个元素才执行
            <br />
            count值: {count}
            <button onClick={() => { setCount(count + 1) }}>把count加一</button>
        </div>
    )
}
