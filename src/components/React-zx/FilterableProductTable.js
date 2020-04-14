import React, { useState } from 'react'

import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable"
export default function FilterableProductTable({ goods }) {
    // 定义表单数据
    const keywords = useState('')
    const stock = useState(false)

    return (
        <div>
            {/* 搜索框 */}
            <SearchBar
                keywords={keywords}
                stock={stock}
            />

            {/* 数据表格 */}
            <ProductTable
                goods={goods}
                keywords={keywords}
                stock={stock}
            />
        </div>
    )
}
