import React from "react";
import ReactDOM from "react-dom";
import Title from '../components/Title'
import {BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import fetcher from '../../utils/fetcher';
import { useAppConfig } from '../lib/useAppConfig'

const DashRoute = React.lazy(() => import('../containers/Dashboard'))
const DetailRoute = React.lazy(() => import('../containers/ItemDetails'))

const AppRouter = () => {
	const appConfig = useAppConfig()
	
	if(!appConfig){
		console.log('no appconfig');
		return(<p>Loading appconfig...</p>)
	}

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