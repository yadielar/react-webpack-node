var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Navigation = require('../components/Navigation.react');

var App = React.createClass({

  render: function(){
    return (
      <div>
      	<Navigation />
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;