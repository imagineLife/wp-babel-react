import React from "react";
import ReactDOM from "react-dom";
import Title from '../components/Title'

const App = ({pText}) => {
  let titleText = 'app title text!'
  	return (
	    <Title text={titleText} />
	  );
};

export default App;