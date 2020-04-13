import React from 'react';
import ReactDOM from 'react-dom';

// 函数式组件
// function Hello() {
//     // 返回JSX
//     return <h1>Hello World ~~~</h1>
// }
// 类组件 (面向对象编程)
// class Study extends React.Component {
//     // render
//     render() {
//         return <h1>Study React</h1>
//     }
// }




// 函数父向子传值
// function DataList() {
//     const numbers = [1, 2, 3, 4, 5, 6, 7]
//     return <ul>
//         <DataListLi numbers={numbers} />
//     </ul>
// }
// function DataListLi(props) {
//     let numbers = props.numbers
//     return numbers.map(v => <li>{v}</li>)
// }

// 类class父向子传值
// class DataList extends React.Component {
//     render() {
//         const numbers = [1, 2, 3, 4, 5, 6]
//         return <ul><DataListLi numbers={numbers} /></ul>
//     }
// }
// class DataListLi extends React.Component {
//     render() {
//         return this.props.numbers.map(v => <li>{v}</li>)
//     }
// }



// 子向父传值
// class Count extends React.Component {
//     // 接收子组件传的数据
//     // 参数: 子组件传的参数
//     onData = (data) => {
//         console.log("父组件中接收到数据: " + data)
//     }
//     render() {
//         return <div><CountButton onData={this.onData} /></div>
//     }
// }
// class CountButton extends React.Component {
//     onClick = () => {
//         // 向父组件传值
//         this.props.onData(Date.now())
//     }
//     render() {
//         return <button onClick={this.onClick}>向父组件传值</button>
//     }
// }

// 引入组件
import Tom from "./components/Tom"
import Jack from "./components/Jack"
import Xsyc from "./components/Xsyc"


ReactDOM.render(
    <div>
        <Tom />
        <hr />
        <Jack />
        <hr />
        <Xsyc />
    </div>,
    document.getElementById('root')
);


