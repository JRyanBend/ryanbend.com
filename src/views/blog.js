import React from "react";

export default React.createClass({
    render: function() {
        return (
            <div id="blog" className="page page--blog">
	       		<h2 className="heading">Blog</h2>
	       		<h4 className="heading heading--sub">Portfolio Redesign</h4>
	       		<p>So I've been rewriting my personal website in React to help build up my familiarity with it. This is happening in real time kind of, this blog will temporarily just be me blogging about my progress building the site in real time.</p>
	       		<p>The stack is currently just webpack building out my SASS and React, I don't know how I'm going to handle my persistent data yet, though i'm probably going to be using redux. Assuming I can use it like a database of sorts to serve up data.</p>
	       		<p>In the meantime I'll be building out the basic structure of the site, creating components for reusable assets, and experimenting with the page/folder structures to come up with something that works well.</p>
	       		<p>One issue I'm struggling with right now is how to organize my react components. I currently have an 'app.js' which is just doing the reactDom render to the 'root' div. It just renders the 'main' react component, which in turn renders the 'header', 'blog', 'portfolio', and 'footer' components. I have 'blog' and 'portfolio' in a 'views' folder with 'header' and 'footer' in a 'common' folder. It feels awkward, so I'm gonna do some research and switch that up probably.</p>
	   		</div>
        );
    },
});
