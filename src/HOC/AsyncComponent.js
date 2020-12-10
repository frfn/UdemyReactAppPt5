import React, { Component } from "react";

const asyncComponent = (importComponent) => {
	return class extends Component {
		state = {
			/* component will be the component that is loaded INTO this component */
			component: null,
		};

		componentDidMount() {
			/* importComponent will be a function which returns a promise { three states: pending, fulfilled, rejected } */
			// cmpnt will have a property called default!, that's all it's doing.
			importComponent().then((cmpnt) => {
				this.setState({
					component: cmpnt.default,
				});
			});
		}

		render() {
			/* C contains the component state, important for code below! */
			const C = this.state.component;

            /* this.props is a great way to pass in ALL props */
            // if C is true, pass <C {...this.props} else null
			return (C ? <C {...this.props} /> : null);
		}
	};
};

export default asyncComponent;
