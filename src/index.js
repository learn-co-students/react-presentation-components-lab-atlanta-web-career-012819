import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

function sendMessage() {
  console.log(`Sup!`)
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={sendMessage} />
  </div>,
  document.getElementById('root')
);