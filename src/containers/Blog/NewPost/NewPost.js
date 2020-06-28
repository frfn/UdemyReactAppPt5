import React, { Component } from "react";
import axios from "../../../axios";
import { Link } from "react-router-dom";

import "./NewPost.css";

class NewPost extends Component {
	state = {
		title: "",
		body: "",
		author: "Flex Fad",
		status: false,
	};

	componentDidMount() {
		console.log(this.props);
	}

	/* I am going to alter some stuff, but will keep original! edit: failed. */
	postDataHandler = () => {
		this.setState(
			{
				status: true,
			},
			() => {
				console.log(this.state.status);
			}
        );
        
		const data = {
			title: this.state.title,
			body: this.state.body,
			author: this.state.author,
			status: this.state.status,
		};

		/* you can 'configure' POST with third argument */
		/* 'data' is transformed into JSON */
		axios
			.post("/posts/", data)

			/* the response would be like 201, success!, it would give a status update! Nice. */
			.then((response) => {
				console.log(response);
				this.setState({
					status: false,
				});
				alert("Success, your post has been submitted!");
				/* this.setState({
                    status: response.status
                }) */
			})
			.catch((error) => {
				console.log(error);
				alert("Oops, an error has occured, try again!");
				this.setState({
					status: false,
				});
			});
	};

	// to show the status of response object!
	/* showInConsole = () => {
        console.log(this.state);
    } */

	/* this is just suppose to be the CHANGE HANDLER, it calls postDataHandler ... smh */
	// postDataHandlerV2 = (e) => {
	//     const { name, value } = e.target;
	//     this.setState({
	//         [name]: value
	//     }, () => {console.log(this.state)})

	//     const creatingPost = {
	//         ...this.state
	//     }

	//     /* axios transform our object into JSON */
	//     axios.post('http://jsonplaceholder.typicode.com/posts', creatingPost)
	//         .then(response => {
	//         console.log(response)
	//     });
	// }

	render() {
		let buttonString = "Add Post";
		if (this.state.status === true) {
			buttonString = "Loading...";
		}

		return (
			<div className='NewPost'>
				<h1>Add a Post</h1>

				<label>Title</label>
				<input
					type='text'
					value={this.state.title}
					onChange={(event) =>
						this.setState({ title: event.target.value }, () => {
							console.log(this.state);
						})
					}
				/>

				<label>Content</label>
				<textarea
					rows='4'
					value={this.state.body}
					onChange={(event) =>
						this.setState({ body: event.target.value }, () => {
							console.log(this.state);
						})
					}
				/>

				{/* drop down box is called SELECT html tag (select box, JComboBox, etc.) */}
				<label>Author</label>
				<select
					value={this.state.author}
					onChange={(event) =>
						this.setState({ author: event.target.value }, () => {
							console.log(this.state);
						})
					}
				>
					<option value='Max'>Max</option>
					<option value='Manu'>Manu</option>
					<option value='Flex'>Flex</option>
				</select>

				<button onClick={this.postDataHandler}>{buttonString}</button>

				{/* <button onClick={this.showInConsole}>Show State</button> */}
			</div>
		);

		// return (
		//     <div className="NewPost">
		//         <h1>Add a Post</h1>

		//         <label>Title</label>
		//         <input
		//             id='title'
		//             name='title'
		//             type="text"
		//             value={this.state.title}
		//             onChange={(e) => this.postDataHandlerV2(e)}
		//         />

		//         <label>Content</label>
		//         <textarea
		//             id='body'
		//             name='body'
		//             rows="4"
		//             value={this.state.body}
		//             onChange={(e) => this.postDataHandlerV2(e)}
		//         />

		//         <label>Author</label>
		//         {/* value is impportant because of event.target.value */}
		//         <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
		//             <option value="Max">Max</option>
		//             <option value="Manu">Manu</option>
		//             <option value="Flex">Flexer</option>
		//         </select>

		//         <button onClick={this.postDataHandler}>Add Post</button>
		//     </div>
		// );
	}
}

export default NewPost;
