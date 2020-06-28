import React from "react";
import { withRouter } from "react-router-dom";

import "./Post.css";

const post = (props) => {
    /* props will have info passed from Posts.js + the props from BrowserRouter: history, location, match, staticContext 
    because of the withRouter() wrapper! */
	console.log(props);
	return (
		<article className='Post' onClick={props.clicked}>
			<h1>{props.title}</h1>
			<div className='Info'>
				<div className='Author'>{props.author}</div>
			</div>
		</article>
	);
	/* article is just a DIV, it is HTML semantic elements */
};

export default withRouter(post);
