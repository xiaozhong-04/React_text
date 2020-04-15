import React from 'react';
import ReactDOM from 'react-dom';

import Function from "./components/Function"
import Class from "./components/Class"

function App() {
  return <div>
    <Function />
    <hr />
    <Class />
  </div>
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


