import React, { Component } from "react";
import Post from "../../../components/Post/Post";
import axios from '../../../axios'
import styles from './Posts.module.css'

class Posts extends Component {
	state = {
		/* onClick function will have method that sets state for this property! */
		// selectedPostId: null,

		/* response.data is an Array! the value of posts can be anything but for convention is set to empty list */
		posts: [],
		// error: false,
	};

	/* Lifecycle Method */
	componentDidMount() {
		/* I am able to shorten BECAUSE I created the axios.js instance and made baseURL the link that posts/ will come from */
		axios
			.get("/posts/")

			/* the 'response' is an object passed AUTOMATICALLY - it is the end point of the API */
			/* the 'response' has valuable data like status, statusText, requests, etc., INCLUDING the .data (which are Arrays!) */
			.then((response) => {
				/* grabbing the first 5 objects */
				const posts = response.data.slice(0, 4);

				/* adding an author field */
				/* post is the object in the array starting from index 0 */
				const updatedPosts = posts.map((post) => {
					/* each post will be returned as normal because of spread operator IN ADDITION to the author being hard coded */
					return {
						...post,
						author: "Flexer Fadrigalan",
					};
				});

				/* call setState inside the 'then' method so that it will be able to access data from Axios call */
				/* This is about scoping, do it outside, and it doesn't have access to the variable 'udpatedPost' */
				this.setState(
					{
						/* posts: response.data */
						posts: updatedPosts,
					},
					() => {
						console.log(updatedPosts);
					}
				);
				// console.log(response)
			})
			.catch((error) => {
				console.log(error);
				this.setState({
					error: true,
				});
			});

		/* If setState is called outside... does not work, the variable inside the 'then' method isn't available outside of Axios get() call */
	}

	/* if user clicks on post */
	/* ID is collected from anonymous function, below */
	postSelectedHandler = (id) => {
		this.setState(
			{
				selectedPostId: id,
			},
			() => {
				console.log(this.state.selectedPostId);
			}
		);
	};

	render() {
		let posts = (
			<p style={{ textAlign: "center" }}>Oops, something went wrong.</p>
		);

		if (!this.state.error) {
			posts = this.state.posts.map((post) => {
				return (
					<Post
						/* clicked will just collect the id and pass it into its parameter! */
						clicked={() => this.postSelectedHandler(post.id)}
						title={post.title}
						author={post.author}
						key={post.id}
					/>
				);
			});
		}
		return <section className={styles.Posts}>{posts}</section>;
	}
}

export default Posts;