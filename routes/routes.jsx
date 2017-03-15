var React = require('react');
var {Router, Route, browserHistory} = require('react-router');

// if window object exists, we are client-side JS
if (typeof window === 'object') {
    function createElement(Component, props) {
        return <Component {...props} {...window.PROPS} />
    }
}

module.exports = (
    <Router history={browserHistory} createElement={createElement}>
        <Route path='/' component={require('../Component.jsx')}>
        </Route>
    </Router>
);