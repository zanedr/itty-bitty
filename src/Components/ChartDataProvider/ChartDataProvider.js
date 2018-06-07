import React from 'react';
import { render } from 'react-dom';
import ChartContainer from '../ChartContainer/ChartContainer';
import { getData } from "./utils"

import { TypeChooser } from "react-stockcharts/lib/helper";


export default class ChartDataProvider extends React.Component {
	componentDidMount() {
		getData().then(data => {
			this.setState({ data })
		})
	}
	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
		return (
			<TypeChooser>
				{type => <ChartContainer type={type} data={this.state.data} />}
			</TypeChooser>
		)
	}
}

