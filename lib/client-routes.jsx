var Router = require('react-router');
var React = require('react');

var App = require('./components/app');
var Grid = require('./components/grid');
var KendoGrid = require('./components/kendo-grid');
var Dial = require('./components/kendo-dial');
var JQXGrid = require('./components/jqx-grid');
var Form = require('./components/form');
var NotFound = require('./components/notfound');

// represents the overall structure of the application and mappings from urls to react view components
module.exports = (
    <Router.Route name='app' path='/' handler={App}>
        <Router.Redirect from='/' to='grid' />
        <Router.Route name='grid' path='/grid' handler={Grid} />
        <Router.Route name='kgrid' path='/kgrid' handler={KendoGrid} />
        <Router.Route name='dial' path='/dial' handler={Dial} />
        <Router.Route name='jqxgrid' path='/jqxgrid' handler={JQXGrid} />
        <Router.Route name='form' path='/form' handler={Form} />
        <Router.NotFoundRoute handler={NotFound} />
    </Router.Route> );
