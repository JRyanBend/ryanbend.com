import React from "react";
import ReactGA from 'react-ga';

export default React.createClass({

    render: function() {

    	ReactGA.initialize('UA-26547021-6'); // Here we should use our GA id
    	ReactGA.pageview(window.location.pathname + window.location.search);
        return (
            <div className="footer">
				<a className="footer__link" href="">Github</a><span className="footer__spacer"> --||-- </span><a className="footer__link" href="">Linkedin</a>
	   		</div>
        );
    },
});
