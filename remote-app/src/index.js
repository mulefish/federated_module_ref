import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './HelloWorld';

const App = () => (
  <div>
    <h1>Remote App</h1>
    <HelloWorld />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
