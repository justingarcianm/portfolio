import React from 'react';


function Header() {

	function togglehiddenText() {
		const showArrow = document.querySelector(".show-arrow")
		const hiddenText = document.querySelector(".hidden-text")
		showArrow.classList.toggle("toggle-arrow")
		hiddenText.classList.toggle("toggle-text")
		if (hiddenText.classList.contains("toggle-text")) {
			hiddenText.style.opacity = "1"
		} else {
			hiddenText.style.opacity = "0"
		}
	}

	return (
		<header >
			<div className="container">
				<h1>Hi, I'm Justin</h1>

				<p className="accent">A web developer</p>

				<div className="show-arrow">
					<i className="material-icons" onClick={togglehiddenText}>expand_more</i>
				</div>
				<div className="hidden-text">
					<p>Since 2018 I have commited myself to teaching myself web development. I am front end focused using React, but I also have the skills to take on full stack with Node. Below are some of my projects and ways to get a hold of me.</p>
				</div>
			</div>
		</header>
	)
}
export default Header;
