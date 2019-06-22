import React from "react";
import ReactDOM from "react-dom";
import Title from '../components/Title'
import {BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { useAppConfig } from '../lib/useAppConfig'

const DashRoute = React.lazy(() => import('../containers/Dashboard'))
const DetailRoute = React.lazy(() => import('../containers/ItemDetails'))

const AppRouter = () => {
	const appConfig = useAppConfig()
	const [srcData, setSrcData] = React.useState(null)

	React.useEffect(() => {
		if(appConfig !== null){
			setTimeout(() => {
				fetch(`../../dummyAPI/${appConfig.sourceString}.json`)
				.then(res => res.json())
				.then(res => {
					setSrcData(res)
				})	
			}, 1500)
			
		}
	}, [appConfig])

	if(!appConfig){
		console.log('no appconfig');
		return(<p>Loading appconfig...</p>)
	}

	if(appConfig && srcData == null){
		return(<p>Loaded AppConfig, Now loading src data...</p>)
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