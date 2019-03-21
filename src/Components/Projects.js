import React from 'react'
import { Carousel } from 'react-materialize'
import ArtistPage from './projects/ArtistPage'
import LocalBistro from './projects/LocalBistro'
import YelpCamp from './projects/YelpCamp'

function Projects() {


	return (
		<section className="container" id="projects">
			<h2>Projects</h2>

			<Carousel options={{ fullWidth: true, indicators: true }}>
				<div>
					<ArtistPage />
				</div>
				<div>
					<LocalBistro />
				</div>
				<div>
					<YelpCamp />
				</div>
			</Carousel>

			<a href="somewhere" className="btn">See More</a>
		</section>
	)
}
export default Projects;