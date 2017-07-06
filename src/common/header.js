import React from "react";

export default React.createClass({

	componentDidMount: function() {
    	const button_projects = document.getElementById("button_projects"),
    		  button_blog = document.getElementById("button_blog");

    	let projects = document.getElementById("projects"),
    		blog = document.getElementById("blog");


    	button_projects.addEventListener("click", function(event) {
    		projects.className = "page page--show";
    		blog.className = "page";
    	})

    	button_blog.addEventListener("click", function(event) {
    		blog.className = "page page--show"
    		projects.className = "page";
    	})
  	},

    render: function() {

    	
    	console.log("Hello");

    	console.log(document.getElementById("button_projects"))

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
