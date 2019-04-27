import React from "react";
import ReactDOM from "react-dom";
const App = ({pText}) => {
  	return (
	    <div>
	      <p>{pText}</p>
	    </div>
	  );
};
export default App;
ReactDOM.render(<App pText={'test text'}/>, document.getElementById("app"));