var React = require('react');
var ReactDOM = require('react-dom');
import injectTapEventPlugin from 'react-tap-event-plugin';
require('./index.css');
var App = require('./components/App');

injectTapEventPlugin();

ReactDOM.render(
  <App />,
  document.getElementById('app')
);