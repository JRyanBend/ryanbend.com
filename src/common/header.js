import React from "react";

export default React.createClass({

    render: function() {
        return (
            <div className="header">
	            <div className="header__hero">
		       		<h2 className="heading">J Ryan Bend</h2>
		       		<img className="header__img" src="/src/code.png" />
		       		<div className="header__block">
			       		<a className="header__button button">Web Developer</a>
			       		<a className="header__button button">Agile Enthusiast</a>
			       		<a className="header__button button">Gentleman Rogue</a>
		       		</div>
	       		</div>
	   		</div>
        );
    },
});
