import React from 'react'
import ArtistPage from './projects/ArtistPage'
import LocalBistro from './projects/LocalBistro'
import YelpCamp from './projects/YelpCamp'

function Projects() {

	const navToggle = () => {
		const navBar = document.querySelectorAll(".navbar-custom ul li i")
		for (let i = 0; i < navBar.length; i++) {
			navBar[i].classList.remove("active")
			navBar[1].classList.add("active")
		}
	}

	return (
		<section className="container" id="projects" onMouseOver={navToggle}>
			<h2 className="flow-text">Projects</h2>

			<ArtistPage />
			<br />
			<LocalBistro />
			<br />
			<YelpCamp />
			<br />
			<a href="somewhere" className="btn">See More</a>
		</section>
	)
}
export default Projects;