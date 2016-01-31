import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import mdl_style from 'react-mdl/extra/material.css';
import mdl_js from 'react-mdl/extra/material.js';
import App from './components/Main';

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
