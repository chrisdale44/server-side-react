var React = require('react');
var { Link } = require('react-router');
var { connect } = require('react-redux');

var Layout = React.createClass({
	_handleClick: function() {
		alert();
	},
	render: function() {
		var custom = this.props.custom;
		return (
			<html>
				<head>
					<title>{custom.title}</title>
					<link rel="stylesheet" href="/style.css" />
				</head>
				<body>
					<div>
						<h1>{custom.title}</h1>
						<p>Isn't server-side rendering remarkable?</p>
						<button onClick={this._handleClick}>Click me</button>
						{this.props.children}
						<ul>
							<li>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/about'>About</Link>
							</li>
						</ul>
					</div>
					<script dangerouslySetInnerHTML={{
						__html: 'window.PROPS=' + JSON.stringify(custom)
					}}/>
					<script src='bundle.js' />
				</body>
			</html>
		)
	}
});

var wrapper = connect(
	function(state) {
		return { custom: state };
	}	
);

module.exports = wrapper(Layout);