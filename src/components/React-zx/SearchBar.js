import React from 'react'

export default function SearchBar({ keywords, stock }) {
    return (
        <div>
            <input type="text" placeholder="输入搜索关键字"
                value={keywords[0]}
                onChange={e => { keywords[1](e.target.value) }}
            />
            <p>
                <input type="checkbox"
                    checked={stock[0]}
                    onChange={e => stock[1](e.target.checked)}
                />
                只显示有库存的商品
            </p>
        </div>
    )
}
