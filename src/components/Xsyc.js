import React, { useState, useEffect } from 'react'

function Hello() {
    useEffect(() => {
        console.log('我来了~');
        return () => {
            console.log("我走了~")
        }
    }, [])
    return <h1>hello,我显示了~</h1>
}

export default function Jack() {
    const [show, setShow] = useState(false)

    return (
        <div><button onClick={() => { setShow(!show) }}>显示/隐藏</button>
            {show && <Hello />}</div>
    )
}
