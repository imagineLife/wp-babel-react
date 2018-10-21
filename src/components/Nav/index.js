import React from 'react';
import './index.css';

export default function Nav() {
	//Help update this specific navLink text to change when signed-in-or-not :) 

//array of Objects,
//these are properties of each NavLink below	
	const navLinkArray = [
		{
			linkTo : "/about",
			imgSrc : "/imgs/info.ico",
			alt : "About"
		},
	];

	let sandwichIcon = <button className='sandwich'>&#9776;</button>

	
    return (
		<nav>
			{sandwichIcon}
			<ul className='navUL'>
				<li className='navLI'>Test Li</li>
			</ul>
		</nav> 
    );
}
