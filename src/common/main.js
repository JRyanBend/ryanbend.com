import React from "react";
import Header from './header'
import Footer from './footer'
import Blog from '../views/blog'
import Portfolio from '../views/portfolio'

export default React.createClass({
    render: function() {
        return (
        	<div className="main">
	            <Header />
	            <Blog />
	            <Portfolio />
	            <Footer />
            </div>
        );
    },
});
