import React, { Component } from "react";
import axios from "../../../axios";

import "./FullPost.css";

/* ANYTHING with this.props.id = undefined. I left it there for demo purposes, you can see IN console log */
/* this.state.loadedPost in this example is the axios data */
/* this.props are the properties PASSED FROM Blog.js because of the <Route to='/posts/:id/' exact component={FullPost}> tag */

class FullPost extends Component {
	/* loadedPost - right now, nothing has been loaded! */
	state = {
		loadedPost: null,
	};

	/* this will cause infinite NETWORK loop ... since the setState has UPDATED, it will rerender and execute componenetDidUpdate again, and again, and again...  below FIXES the issue */
	// componentDidUpdate() {
	//     if (this.props.id) {
	//         axios.get('http://jsonplaceholder.typicode.com/posts/' + this.props.id)
	//             .then(response => {
	//                 this.setState({
	//                     loadedPost: response.data
	//                 })
	//                 // console.log(response)
	//             })
	//     }
	// }
	/* this is why calling in componentDidUpdate is dangerous if not handled correctly! */

	/* Safely fetching data! */
	/* We have checked the properties as well as the state! */
	componentDidMount() {
		console.log(this.props)
		this.loadData();	
	}

	componentDidUpdate () {
		this.loadData();
	}

	/* IMPORTANT FIX. */
	loadData () {
		/* if props.id is TRUE, execute */
		if (this.props.match.params.num) {
			/* since loadedPost is NULL, w/o '!this.state.loadedPost', the 'if' condition will NEVER execute */
			/* this.state.loadedPost checks to see if loadedPost has a value, if it does, true! */
			/* 
            This is the last check!
            loadedPost.id !== porps.id
            
            3 !== 4, true, so execute line!
            3 !== 3  false, 3 IS 3, line will not execute!

            if the loaded post ID is NOT the same as the ID coming in, then execute, else, do not do anything.

            only CHANGE when the props.id is changed.
            */
			

			if (
				!this.state.loadedPost ||
				(this.state.loadedPost &&
					/* params.num is actually a string, if we use strict inequality, it will not compare correctly until casting 'num' to a number 
						New Learn: add a '+' to make variable into a number!
					*/
					// this.state.loadedPost.id !== Number(this.props.match.params.num))
					this.state.loadedPost.id !== +this.props.match.params.num)
			) {
				
				axios.get("/posts/" + this.props.match.params.num).then((response) => {
					this.setState({
						loadedPost: response.data,
					});
					console.log(response);
				});
			}
		}
	}

	deletePostHandler = () => {
		axios.delete("/posts/" + this.props.match.params.num).then((response) => {
			console.log(response);
		});
	};

	render() {
		let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;

		/* This is to show that there IS a call being made, since AXIOS is Promise based, it is ASYNC, so this will show that it IS loading... for user purposes */
		if (this.props.match.params.id) {
			post = <p style={{ textAlign: "center" }}>Loading...</p>;
		}

		/* Since Axios is async, above code will render first, then it will see if loadedPost has a value, if so, load value! */
		/* If 'Loading...' is not implemented and goes straight for the check, loadedPost will be a null value since code will execute right away, causing the error, that null can't have property! I fixed by checking if loadedPost has a value! */

		/* null = false, if 'id' has value, true */
		if (this.state.loadedPost) {
			post = (
				<div className='FullPost'>
					<h1>{this.state.loadedPost.title}</h1>
					<p>{this.state.loadedPost.body}</p>
					<div className='Edit'>
						<button
							onClick={this.deletePostHandler}
							className='Delete'
						>
							Delete
						</button>
					</div>
				</div>
			);
		}

		/* POST is JSX */
		return post;
	}
}

export default FullPost;
