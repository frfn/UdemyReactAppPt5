import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Blog from "./containers/Blog/Blog";

class App extends Component {
	render() {
		return (
      /* BrowserRouter is for routing purposes, wrap any component you want with BrowserRouter to use */
			<BrowserRouter basename='/my-app'>
				<div className='App'>
					<Blog />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
