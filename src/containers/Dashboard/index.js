import React from "react"
import { scaleOrdinal, scaleLinear, scaleBand } from 'd3-scale';
import { Redirect } from 'react-router-dom'
import BarChart from '../../components/BarChart'
import useWindowSize from '../../Hooks/UseWindowSize';

const Dashboard = ({data, loggedIn}) => {

	const size = useWindowSize()

	if(loggedIn !== true){
		console.log('Dashbaord Loaded...');
		return( <Redirect to="/login" /> )
	}
	
	console.log('size')
	console.log(size)
	
	let xScale;
	if(data){
		xScale = scaleBand().domain(data.map(d => {
			return Object.keys(d)[0]
		})).range([0, 400])
		.paddingInner(.2)
		.paddingOuter(.1)
	}

	let yScale = scaleLinear().domain([0, 20]).range([0, 250])

	return(
		<React.Fragment>
			<p>Dashboard here</p>
			
			<BarChart
				data={data}
				xScale={xScale}
				yScale={yScale}/>
		</React.Fragment>

	)
}

export default Dashboard