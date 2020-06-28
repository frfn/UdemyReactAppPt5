import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
// import axios from 'axios'
// import axios from "../../axios";

// import Post from "../../components/Post/Post";
// import FullPost from "./FullPost/FullPost";
// import NewPost from "./NewPost/NewPost";
import "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";

class Blog extends Component {
	render() {
		return (
			<div className='Blog'>
				<header>
					<nav>
						{/* Unordered List */}
						<ul>
							{/* List Elements */}
							<li>
                                <NavLink 
                                exact 
                                to='/'
                                activeClassName="the-active-class"
                                >
									Home
								</NavLink>
							</li>

							<li>
								<NavLink
									to={{
										pathname: "/new-post",
										hash: "#submit" /* for submitting */,
										search: "?quick-submit=true",
                                    }}
                                    activeStyle={{
                                        color: 'blue',
                                        textDecoration: 'underline'
                                    }}
								>
									New Post
								</NavLink>
							</li>
						</ul>
					</nav>
				</header>

				{/* path variable is RESERVED word */}
				{/* '/' root should always be exact because each path has a root. */}
				<Route path='/' exact component={Posts} />
				{/* <Route path='/new-post' render={() => <NewPost />} /> */}
				<Route path='/new-post' component={NewPost} />

				{/* <section className="Posts">
          {posts}
          <Post />
          <Post />
          <Post />
        </section> */}

				{/* ROUTING that is why this is commented out from original */}
				{/* <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>

                <section>
                    <NewPost />
                </section> */}
			</div>
		);
	}
}

export default Blog;
