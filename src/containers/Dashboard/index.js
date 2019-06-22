import React from "react"
import {scaleOrdinal} from 'd3-scale';

const Dashboard = ({data}) => {

	let xScale = scaleOrdinal().domain(data.map(d => {
		return Object.keys(d)[0]
	}))
	
	return(
		<p>Dashboard here</p>
	)
}

export default Dashboard