import React from "react"
import {scaleOrdinal} from 'd3-scale';
import { Redirect } from 'react-router-dom'
 
const Dashboard = ({data, loggedIn}) => {

	if(loggedIn !== true){
		console.log('HERE!!!!!');
		return( <Redirect to="/login" /> )
	}

	if(!data){
		return(<p>No Data Yet...</p>)
	}
	

	let xScale = scaleOrdinal().domain(data.map(d => {
		return Object.keys(d)[0]
	}))

	return(
		<p>Dashboard here</p>
	)
}

export default Dashboard