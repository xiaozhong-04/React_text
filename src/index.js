import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <div>
    <h1>我是初始化组件~~~</h1>
  </div>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


