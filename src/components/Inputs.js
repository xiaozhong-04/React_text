import React from 'react'

export default function Inputs({ username, setUsername }) {
    return (
        <div>
            用户名: {username}
            <br />
            <input
                type="text"
                value={username}
                onChange={(e) => { setUsername(e.target.value) }}
            />
        </div>
    )
}
