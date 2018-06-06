console.log('App.js is running');

var name = "Mars";
var template = (
  <div>
    <h1>React working. Yeeeeee. </h1>
    <p>Some paragraph for {name.toUpperCase()}</p>
  </div>
);
var appRoot = document.getElementById('divInBody');

ReactDOM.render(template, appRoot);