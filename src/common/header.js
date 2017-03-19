import React from "react";

export default React.createClass({
    render: function() {
        return (
            <div className="header">
            	<img src="/src/code.png" />
	       		<h2>RYANBEND.COM</h2>
	       		<a className="header__button button">Portfolio</a>
	       		<a className="header__button button">Blog</a>
	   		</div>
        );
    },
});
