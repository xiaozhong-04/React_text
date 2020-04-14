import React from 'react'
import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"

/* 
const goods = [
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
  { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
  { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
  { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];
*/

export default function ProductTable({ goods, keywords, stock }) {
    let catName = "" // 保存分类名称
    let list = [] // 最终的数据
    goods.forEach((v, k) => {

        // 如果是第一件商品或者遇到一个新的分类
        if (catName === "" || catName !== v.category) {
            // 保存这个分类
            catName = v.category
            // 创建一个分类行
            list.push(<ProductCategoryRow key={v.name} catname={catName} />)
        }

        // 库存量过滤,如果勾选了,并且没有库存,就跳过这件商品
        if (stock[0] && !v.stocked) {
            return
        }

        // 关键字过滤, 如果包含关键字才显示出来
        if (v.name.indexOf(keywords[0]) !== -1) {
            // 添加数据
            list.push(<ProductRow key={k} goods={v} />)
        }
    });
    return (
        <table>
            <thead>
                <tr>
                    <th>商品名称</th>
                    <th>价格</th>
                </tr>
            </thead>
            <tbody>
                {list}
            </tbody>
        </table>
    )
}
