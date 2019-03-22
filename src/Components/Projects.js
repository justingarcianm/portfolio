import React from 'react'
import ArtistPage from './projects/ArtistPage'
import LocalBistro from './projects/LocalBistro'
import YelpCamp from './projects/YelpCamp'

function Projects() {



	return (
		<section className="container" id="projects">
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