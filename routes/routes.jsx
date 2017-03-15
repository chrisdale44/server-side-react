var React = require('react');
var {Router, Route, IndexRoute, browserHistory} = require('react-router');

// if window object exists, we are client-side JS
if (typeof window === 'object') {
    function createElement(Component, props) {
        return <Component {...props} custom={window.PROPS} />
    }
}

module.exports = (
    <Router history={browserHistory} createElement={createElement}>
        <Route path='/' component={require('../views/Layout.jsx')}>
            <IndexRoute component={require('../views/Index.jsx')} />
            <Route path='about' component={require('../views/About.jsx')} />
        </Route>
    </Router>
);