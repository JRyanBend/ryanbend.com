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
            	<img src="/src/code.png" />
            	<div className="header__circle">

            	</div>
	       		<h2>RYANBEND.COM</h2>
	       		<a id="button_projects" className="button">Projects</a>
	       		<a id="button_blog" className="button">Blog</a>
	   		</div>
        );
    },
});
