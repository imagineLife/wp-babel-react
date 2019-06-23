import React from 'react'
import './index.css'
import CompanyLogo from '../../../static/imgs/generic-logo.jpg'

const Login = () => {

	const [formData, setFormData] = React.useState({
		uname: '',
		psw: ''
	})

	const submitForm = (e) => {
		e.preventDefault()
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
			        <input 
			      	  type="text" 
			      	  placeholder="Enter Username" 
			      	  name="uname" 
			      	  value={formData.uname} 
			      	  onChange={(e) => {
			      	  	let thisVal = {uname: e.target.value}
			      	  	setFormData(() => {
			      	  	  return {...formData, ...thisVal }
			      	  	})
			      	  }}
			      	  required />
				  </label>

			      <label htmlFor="psw"><b>Password</b></label>
			      <input 
			        type="password" 
			        placeholder="Enter Password" 
			        name="psw" 
			        value={formData.psw} 
			        onChange={(e) => {
			      	  	let thisVal = {psw: e.target.value}
			      	  	setFormData(() => {
			      	  	  return {...formData, ...thisVal }
			      	  	})
			      	  }}
			      	required/>
			        
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