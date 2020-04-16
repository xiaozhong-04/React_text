import React from 'react';
import ReactDOM from 'react-dom';

import Todo from "./components/Todo"
import Text from "./components/Text"
import Text1 from "./components/Text1"
import Todo1 from "./components/Todo1"

function App() {
  return <div>

    <Todo />
    <hr />
    <Text />
    <hr />
    <Text1 />
    <hr />
    <Todo1 />
  </div>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


