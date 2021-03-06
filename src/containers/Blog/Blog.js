import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import "./Blog.css";
import Posts from "./Posts/Posts";

// import axios from 'axios'
// import axios from "../../axios";

// import Post from "../../components/Post/Post";
// import FullPost from "./FullPost/FullPost";
// import NewPost from "./NewPost/NewPost";

/* we want to load this dynamically now */
//import NewPost from "./NewPost/NewPost";
import asyncComponent from "../../HOC/AsyncComponent";

const AsyncNewPost = asyncComponent(() => {
	/* import() is a special syntax, dynamic import */
	return import("./NewPost/NewPost");
});

// import FullPost from "./FullPost/FullPost";

/* when we import stuff, webpack (the build tool used behind the scenes) is informed about the dependency and include it in the global bundle, bundle.js */
// code splitting, lazy loading, we want that. We only want that component to be loaded when needed.

class Blog extends Component {
	/* Navigation Guard, you can set navigation like routes = {route1, route2}, when authenticated, you can have route3 there now, routes = {route1, route2, route3} */
	state = {
		auth: true,
	};

	render() {
		return (
			// <React.Fragment>
			<div className="Blog">
				<header>
					<nav>
						{/* Unordered List */}
						<ul>
							{/* List Elements */}
							<li>
								<NavLink
									exact // the styling will be active for every other routes if we EXACTLY have the '/' URL, not good, the fix is USE EXACT!
									to="/posts" //changing the '/' to '/posts'
									activeClassName="the-active-class" /* for CSS use, a.the-active-class */
								>
									Posts/Articles
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

				{/* If you put FullPost route in this Switch, it will go to a 'different' page, if it's nested ... then it will load at the CURRENT page. Click a post! */}

				<Switch>
					{/* <Route path='/new-post' render={() => <NewPost />} /> */}

					{/* This is a Navigation Guard--notice that it is inside Switch bc it's a route */}
					{this.state.auth ? (
						<Route path="/new-post" component={AsyncNewPost} />
					) : null}

					{/* path variable is RESERVED word */}
					{/* '/' root should always be exact because each path has a root. */}
					<Route path="/posts" component={Posts} />

					{/* <Route render={() => <h1>ERROR 404</h1>} />   */}
					<Redirect from="/" to="/posts" />
					{/* <Route path='/' component={Posts} /> */}
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
			// </React.Fragment>
		);
	}
}

export default Blog;
