import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component{
  
  state = {
  	dummyData: "Dummy React component!"
  }
  render(){
  	return (
	    <div>
	      <p>{this.state.dummyData}</p>
	    </div>
	  );	
  }
  
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));