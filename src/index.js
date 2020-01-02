import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './components/App';
import './styles.css';

const reducer = (state = {}, action) => state;
const store = createStore(reducer);

ReactDOM.render(<App />, document.getElementById('root'));
