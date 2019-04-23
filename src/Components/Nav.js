import React from 'react';

const mobile = {

}

function Nav() {

	const navToggle = (event) => {
		const navBar = document.querySelectorAll(".navbar-custom ul li i")
		for (let i = 0; i < navBar.length; i++) {
			navBar[i].classList.remove("active")
			event.target.classList.add("active")
		}
	}
	return (
		<section className="navbar-custom ">
			<ul>
				<li>
					<a href="#home">
						<i className="material-icons" onClick={navToggle}>panorama_fish_eye</i>
					</a>
				</li>
				<li>
					<a href="#projects">
						<i className="material-icons" onClick={navToggle}>panorama_fish_eye</i>
					</a>
				</li>
				<li>
					<a href="#contact">
						<i className="material-icons" onClick={navToggle}>panorama_fish_eye</i>
					</a>
				</li>
			</ul>
		</section>
	)
}
export default Nav;