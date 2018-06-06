'use strict';

console.log('App.js is running');

var name = "Mars";
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'React working. Yeeeeee. '
  ),
  React.createElement(
    'p',
    null,
    'Some paragraph for ',
    name.toUpperCase()
  )
);
var appRoot = document.getElementById('divInBody');

ReactDOM.render(template, appRoot);
