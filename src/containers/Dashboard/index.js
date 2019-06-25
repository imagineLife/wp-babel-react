import React from "react"
import { scaleOrdinal, scaleLinear, scaleBand } from 'd3-scale';
import { Redirect } from 'react-router-dom'
import BarChart from '../../components/BarChart'
const Dashboard = ({data, loggedIn}) => {

	if(loggedIn !== true){
		console.log('Dashbaord Loaded...');
		return( <Redirect to="/login" /> )
	}

	if(!data){
		return(<p>No Data Yet...</p>)
	}
	
	let xScale = scaleBand().domain(data.map(d => {
		return Object.keys(d)[0]
	})).range([0, 400])
	.paddingInner(.2)
	.paddingOuter(.1)
	

	let yScale = scaleLinear().domain([0, 20]).range([0, 250])

	return(
		<React.Fragment>
			<p>Dashboard here</p>
			<BarChart
				data={data}
				xScale={xScale}
				yScale={yScale} />
		</React.Fragment>

	)
}

export default Dashboard