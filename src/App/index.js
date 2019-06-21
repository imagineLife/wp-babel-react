import React from "react";
import ReactDOM from "react-dom";
import Title from '../components/Title'
import {BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import fetcher from '../../utils/fetcher';

const DashRoute = React.lazy(() => import('../containers/Dashboard'))
const DetailRoute = React.lazy(() => import('../containers/ItemDetails'))

const AppRouter = () => {

	let [ appConfig, setAppConfig ] = React.useState(null)
	/*
		"onLoad", load the appconfig file
	*/
	React.useEffect(() => {
		fetch(`./appconfig/config.js`)
		.then(res => res.json()) 
		.then(res => {
			setAppConfig(res[0]['dev'])	
		})

	}, [])

	console.log('appConfig')
	console.log(appConfig)
	
	
  	return (
	    <Router>
	      <Switch>
	      	
	      	<Route path="/dashboard" exact render={() => (
	      	  <React.Suspense fallback={<p>Loading Dashboard...</p>}>
	      	  	<DashRoute />
	      	  </React.Suspense>
	      	)}/>

	      	<Route path="/itemDetails" exact render={() => (
	      	  <React.Suspense fallback={<p>Loading Item Details...</p>}>
	      	  	<DetailRoute />
	      	  </React.Suspense>
	      	)} />

	      	<Redirect from="/*" to="/dashboard"/>
	      </Switch>
	    </Router>
	  );
};

export default AppRouter;