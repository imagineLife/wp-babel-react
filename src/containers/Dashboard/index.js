import React from "react"
import {scaleOrdinal} from 'd3-scale';
import { Redirect } from 'react-router-dom'
 
const Dashboard = ({data, loggedIn}) => {

	if(loggedIn !== true){
		console.log('HERE!!!!!');
		return( <Redirect to="/login" /> )
	}

	console.log('data')
	console.log(data)
	

	let xScale = scaleOrdinal().domain(data.map(d => {
		return Object.keys(d)[0]
	}))

	return(
		<p>Dashboard here</p>
	)
}

export default Dashboard