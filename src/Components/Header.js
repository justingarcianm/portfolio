import React from 'react';


function Header() {
	return (
		<header>
			<h1>Hi, I'm Justin</h1>

			<p className="accent">A web developer</p>

			<div className="show-arrow">
				<i class="material-icons">expand_more</i>
			</div>

			<p className="hidden-text">Since 2018 I have commited myself to teaching myself web development. I am front end focused using React, but I also have the skills to take on full stack with Node. Below are some of my projects and ways to get a hold of me.</p>

			<div className="hide-arrow">
				<i class="material-icons">expand_less</i>
			</div>
		</header>
	)
}
export default Header;
