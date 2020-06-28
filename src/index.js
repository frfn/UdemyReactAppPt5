import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./registerServiceWorker";
import axios from "axios";

/* baseURL so that I do not have to keep writing the URL everywhere! */
/* casing is important, baseURL */

/* These commented axios code is in Axios.js */
// axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com'
// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post["content-type"] = "application/json";

// console.log(axios.defaults.headers);

/* 
interceptors can be stored inside a variable!
const myInterceptor = axios.interceptors.request.use( ..{code}.. )

to remove an interceptor - use .eject() instead of .use()
   - axios.interceptors.request.eject( ..{code}.. )
*/

/* this just requests the config that we are using right now */
/* this file intercepts the request going out in Blog.js and displays it's config! */

/* if I do not return requestConfig, it will block my request! */
axios.interceptors.request.use(
	(requstConfig) => {
		// console.log(requstConfig);

		/* returning the requestConfig so that axios can complete request */
		return requstConfig;

		/* second argument is for request setting failed! like no internet connection */
	},
	(error) => {
		// console.log(error);
		return Promise.reject(error); // Promise.reject(error), since axios IS promise based, this is how you return is properly.
	}
);

/* I can also add interceptors for responses */
axios.interceptors.response.use(
	(responseConfig) => {
		console.log(responseConfig);
		return responseConfig;
	},
	(error) => {
		// console.log(error);
		return Promise.reject(error);
	}
);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
