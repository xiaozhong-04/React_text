import React from 'react'

function Yuan({ r }) {
    let mj = React.useMemo(() => {
        console.log(1);
        return r * r * 3.14
    }, [r])
    return <div>
        圆的面积 r*r*3.14等于 : {mj}
        <br />
        每次count加1,组件会重新加载然后重新计算圆的面积,所以需要使用useMemo
        <br />
        useMemo是把一个函数计算结果缓存
    </div>
}

export default function Text() {
    const [count, setCount] = React.useState(0)
    return (
        <div>
            <h1>使用useMemo 小案例</h1>
            <Yuan r={10} />
            count值: {count}
            <button onClick={() => { setCount(count + 1) }}>把count加一</button>
        </div>
    )
}
