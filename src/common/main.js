import React from "react";
import Header from './header'
import Footer from './footer'

export default React.createClass({
    render: function() {
        return (
        	<div className="main">
	            <Header />
	            <Footer />
            </div>
        );
    },
});
