var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var EtherTest = require('EtherTest');



// load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();
// Load css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <EtherTest/>,
  document.getElementById('app')
);
