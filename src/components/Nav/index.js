import React from 'react';
import './index.css';
import './hamburger.css';

export default class Nav extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			toggle : 'closed'
		}

		this.changeSandwich = this.changeSandwich.bind(this)
	}

	//Help update this specific navLink text to change when signed-in-or-not :) 
	changeSandwich(){
		console.log('updating sandwich')
		let curTogState = this.state.toggle;
		let newToggle = (curTogState == 'closed') ? 'open' : 'closed'
		this.setState({toggle: newToggle})
	}

	render(){
		console.log('rendering')
		console.log(this.state.toggle)
		//array of Objects,
		//these are properties of each NavLink below	
		const navLinkArray = [
			{
				linkTo : "/about",
				imgSrc : "/imgs/info.ico",
				alt : "About"
			},
		];

		let toggleClass = (this.state.toggle == 'open') ? 'is-active' : '';
		let sandClass = `hamburger hb-simple ${toggleClass}`

		let sandwichIcon = <button className={sandClass} type="button" onClick={this.changeSandwich}>
			  <span className="hamburger-box">
			    <span className="hamburger-inner"></span>
			  </span>
			</button> 


		return (
			<nav>
				{sandwichIcon}
				<ul className='navUL'>
					<li className='navLI'>Test Li</li>
				</ul>
			</nav> 
	    );
	}
}
