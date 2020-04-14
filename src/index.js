import React from 'react';
import ReactDOM from 'react-dom';

// import Input from "./components/Input"
// import Inputs from "./components/Inputs"

// function App() {
//   const [username, setUsername] = useState('')
//   return <div>
//     <Input username={username} setUsername={setUsername} />
//     <hr />
//     <Inputs username={username} setUsername={setUsername} />
//   </div>
// }

import FilterableProductTable from "./components/React-zx/FilterableProductTable"

const goods = [
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
  { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
  { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
  { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

ReactDOM.render(
  <React.StrictMode>
    <FilterableProductTable goods={goods} />
  </React.StrictMode>,
  document.getElementById('root')
);


