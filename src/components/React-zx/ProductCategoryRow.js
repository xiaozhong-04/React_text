import React from 'react'

export default function ProductCategoryRow({ catname }) {
    return (
        <tr>
            <td colSpan="2"><strong>{catname}</strong></td>
        </tr>
    )
}
