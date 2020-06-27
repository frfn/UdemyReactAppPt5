import React, { Component } from "react";
// import axios from 'axios'
import axios from "../../axios";

// import Post from "../../components/Post/Post";
// import FullPost from "./FullPost/FullPost";
// import NewPost from "./NewPost/NewPost";
import "./Blog.css";
import Posts from "./Posts/Posts";

class Blog extends Component {
	render() {
		return (
			<div className='Blog'>
				<header>
					<nav>
						<ul>
							<li>
								<a href='/'>Home</a>
							</li>
							<li>
								<a href='/new-post'>New Post</a>
							</li>
						</ul>
					</nav>
				</header>

				<Posts />

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
