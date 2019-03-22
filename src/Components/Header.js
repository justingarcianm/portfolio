import React from 'react'


function Header() {

	const togglehiddenText = () => {
		// define down arrow and hidden text
		const showArrow = document.querySelector(".show-arrow")
		const hiddenText = document.querySelector(".hidden-text")
		// toggle classes to move arrow and text
		showArrow.classList.toggle("toggle-arrow")
		hiddenText.classList.toggle("toggle-text")
		// toggles opacity of text between 0 and 1 depending if the toggle-text is active
		if (hiddenText.classList.contains("toggle-text")) {
			hiddenText.style.opacity = "1"
			hiddenText.style.zIndex = "1"
		} else {
			hiddenText.style.opacity = "0"
			hiddenText.style.zIndex = "-1"
		}
	}


	const navToggle = () => {
		const navBar = document.querySelectorAll(".navbar-custom ul li i")
		for (let i = 0; i < navBar.length; i++) {
			navBar[i].classList.remove("active")
			navBar[0].classList.add("active")
		}
	}

	return (
		<header onMouseOver={navToggle}>
			<section className="container" id="home" >
				<h1>Hi, I'm Justin</h1>

				<p className="accent">A web developer</p>


				<div className="hidden-text">
					<p>Since 2018 I have commited myself to teaching myself web development. I am front end focused using React, but I also have the skills to take on full stack with Node. Below are some of my projects and ways to get a hold of me.</p>
				</div>
				<div className="show-arrow">
					<i className="material-icons" onClick={togglehiddenText}>expand_more</i>
				</div>
			</section>
		</header>
	)
}

export default Header;
