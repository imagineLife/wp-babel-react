import React from "react";
import ReactDOM from "react-dom";
import Title from '../components/Title'
import {BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { useAppConfig } from '../lib/useAppConfig'

import UserContext from '../Context/UserContext';

const LoginRoute = React.lazy(() => import('../containers/Login'))
const DashRoute = React.lazy(() => import('../containers/Dashboard'))
const DetailRoute = React.lazy(() => import('../containers/ItemDetails'))
const ResponsiveRoute = React.lazy(() => import('../containers/responsiveBoxes'))

const AppRouter = () => {
	const appConfig = useAppConfig()
	const [userData, setUserData] = React.useState(null)
	const [srcData, setSrcData] = React.useState(null)

	//developing responsive boxes
	// const [loggedIn, setLoggedIn ] = React.useState(true)
	const [loggedIn, setLoggedIn ] = React.useState(false)


	console.log('AppRouter: => appConfig')
	console.log(appConfig)
	
	if(!appConfig){	
		return(<p>Loading appconfig...</p>)
	}
	
  	return (
	    <Router>
	      <Switch>
	      	<UserContext.Provider value={{loggedIn, setLoggedIn}}>
		      	<Route exact path="/login" exact render={() => (
		      	  <React.Suspense fallback={<p>Loading Login...</p>}>
		      	  	<LoginRoute 
		      	  		apiString={appConfig.apiString}/>
		      	  </React.Suspense>
		      	)}/>

		      	<Route exact path="/dashboard" exact render={() => (
		      	  <React.Suspense fallback={<p>Loading Dashboard...</p>}>
		      	  	<DashRoute 
		      	  		data={srcData}/>
		      	  </React.Suspense>
		      	)}/>

		      	<Route exact path="/itemDetails" exact render={() => (
		      	  <React.Suspense fallback={<p>Loading Item Details...</p>}>
		      	  	<DetailRoute />
		      	  </React.Suspense>
		      	)} />

		      	<Route exact path="/responsive" exact render={() => (
		      	  <React.Suspense fallback={<p>Loading Item Details...</p>}>
		      	  	<ResponsiveRoute />
		      	  </React.Suspense>
		      	)} />

		      	<Route exact path="/" render={() => (
				  loggedIn ? (
				    <Redirect to="/responsive"/>
				  ) : (
				    <Redirect to="/login"/>
				  )
				)}/>

		      	<Redirect from="/*" to="/dashboard" />
		    </UserContext.Provider>

	      </Switch>
	    </Router>
	  );
};

export default AppRouter;