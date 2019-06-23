import React from 'react'
import './index.css'
import CompanyLogo from '../../../static/imgs/generic-logo.jpg'

const Login = () => {

	const submitForm = (e) => {
		e.preventDefault()
		console.log('e.target')
		console.log(e)	
	}

	return(
		<div id="login">
			<form className="modal-content animate" onSubmit={e => submitForm(e)}>
			    <div className="imgcontainer">
			      <img src={CompanyLogo} alt="Generic Company" className="avatar" />
			    </div>

			    <div className="container">
			      <label htmlFor="uname">
			      	<b>Username</b>
			      </label>
			      <input type="text" placeholder="Enter Username" name="uname" required />

			      <label htmlFor="psw"><b>Password</b></label>
			      <input type="password" placeholder="Enter Password" name="psw" required/>
			        
			      <button type="submit">Login</button>
			      <label>
			        <input type="checkbox" name="remember" /> Remember me
			      </label>
			    </div>

			    <div className="container" style={{backgroundColor: "#f1f1f1"}}>
			      <button type="button" className="cancelbtn">Cancel</button>
			      <span className="psw"><a href="#">Forgot password?</a></span>
			    </div>
			  </form>
		</div>
	)
}

export default Login;