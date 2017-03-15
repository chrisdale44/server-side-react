var React = require('react');
var {Router, Route, IndexRoute, browserHistory} = require('react-router');

module.exports = (
    <Router history={browserHistory}>
        <Route path='/' component={require('../views/Layout.jsx')}>
            <IndexRoute component={require('../views/Index.jsx')} />
            <Route path='about' component={require('../views/About.jsx')} />
        </Route>
    </Router>
);