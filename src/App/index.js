import React from "react";
import ReactDOM from "react-dom";
import Title from '../components/Title'
const DashRoute = React.lazy(() => import('../containers/Dashboard'))
const DetailRoute = React.lazy(() => import('../containers/ItemDetails'))
import {BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';


const AppRouter = () => {
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