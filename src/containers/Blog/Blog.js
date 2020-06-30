import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
// import axios from 'axios'
// import axios from "../../axios";

// import Post from "../../components/Post/Post";
// import FullPost from "./FullPost/FullPost";
// import NewPost from "./NewPost/NewPost";
import "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";

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
									// exact // the styling will be active if we EXACTLY have the '/' URL
									to='/posts' //changing the '/' to '/posts'
									activeClassName='the-active-class' /* for CSS use, a.the-active-class */
								>
									Posts
								</NavLink>
							</li>

							<li>
								<NavLink
									to={{
										pathname: "/new-post",
										hash:
											"#submit" /* for submitting, the fragment */,
										search:
											"?quick-submit=true" /* the query */,
									}}
									activeStyle={{
										color: "#fa923f",
										textDecoration: "underline",
									}}
								>
									New Post, --> check Blog.js for INLINE
									STYLE.
								</NavLink>
							</li>
						</ul>
					</nav>
				</header>

				<Switch>
					{/* path variable is RESERVED word */}
					{/* '/' root should always be exact because each path has a root. */}
					<Route path='/posts' exact component={Posts} />
					{/* <Route path='/new-post' render={() => <NewPost />} /> */}
					<Route path='/new-post' component={NewPost} />

					{/* I can set routing here for the post... /:id - dynamic URL, 'id' will be in   */}
					{/* :num = inside params, we then use in FullPost as this.props.match.params.num */}
					<Route path='/posts/:num' exact component={FullPost} />
				</Switch>

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
