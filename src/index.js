import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import './css/pure-min.css';
import App from './App';

// Pergunta importante: O componente precisa guardar dados da aplicação?
// true ? use class : use function

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
