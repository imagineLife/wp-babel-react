import React from "react";
import ReactDOM from "react-dom";
import Title from '../components/Title'
const DashRoute = React.lazy(() => import('../containers/Dashboard'))
const DetailRoute = React.lazy(() => import('../containers/ItemDetails'))

const Router = ({pText}) => {
  	return (
	    <div id="app">
	    	<p>Router</p>
	    </div>
	  );
};

export default Router;