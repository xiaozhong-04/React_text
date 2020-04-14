import React from 'react'

export default function ProductRow({ goods }) {
    return (
        <tr>
            <td>{goods.stocked ? goods.name : <span style={{ color: 'red' }}>{goods.name}</span>}</td>
            <td>¥{goods.price}</td>
        </tr>
    )
}
