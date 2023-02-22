import React from "react";
import ReactDOM from "react-dom";
import Title from '../components/Title'
import {BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
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
	
	//fetches mock data when logged-in
	React.useEffect(() => {
		if(loggedIn){
			console.log('NOTICED that You"ve been logged in...');
			
			//mock network-delay
			setTimeout(() => {
				console.log('Fetching Dashboard Data after logged in...');
				
				fetch(`../../${appConfig.apiString}/${appConfig.sourceFileString}.json`)
				.then(res => res.json())
				.then(res => {
					setSrcData(res)
				})
			}, 2500)
		}
	}, [loggedIn])
	
	if(!appConfig){	
		return(<p>Loading appconfig...</p>)
	}
	
	return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
      <Router>
        <Routes>
          <Route
            exact
            path="/login"
            element={
              <React.Suspense fallback={<p>Loading Login...</p>}>
                <LoginRoute apiString={appConfig.apiString} />
              </React.Suspense>
            }
          />

          <Route
            exact
            path="/dashboard"
            element={
              <React.Suspense fallback={<p>Loading Dashboard...</p>}>
                <DashRoute data={srcData} />
              </React.Suspense>
            }
          />

          <Route
            exact
            path="/itemDetails"
            element={
              <React.Suspense fallback={<p>Loading Item Details...</p>}>
                <DetailRoute />
              </React.Suspense>
            }
          />

          <Route
            exact
            path="/responsive"
            element={
              <React.Suspense fallback={<p>Loading Item Details...</p>}>
                <ResponsiveRoute />
              </React.Suspense>
            }
          />

          <Route
            exact
            path="/"
            element={
              loggedIn ? (
                <React.Suspense fallback={<p>Loading Item Details...</p>}>
                  <ResponsiveRoute />
                </React.Suspense>
              ) : (
                <React.Suspense fallback={<p>Loading Login...</p>}>
                  <LoginRoute apiString={appConfig.apiString} />
                </React.Suspense>
              )
            }
          />

          <Route
            from="/*"
            element={
              <React.Suspense fallback={<p>Loading Dashboard...</p>}>
                <DashRoute data={srcData} />
              </React.Suspense>
            }
          />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
};

export default AppRouter;