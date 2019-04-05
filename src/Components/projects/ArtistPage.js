import React from 'react'

function ArtistPage() {
	return (
		<div className="row">
			<div className="col m12 l6">
				<img src={require("./img/artistSite.JPG")} alt="project" className="responsive-img z-depth-2" />
			</div>
			<div className="col m12 l6">
				<div className="divider"></div>
				<h3>Artist Site</h3>
				<p>An illustrator I know started to branch out into freelancing. I built this site to showcase some of his work and use this website as a hub to connect to all of his work.</p>
				<p>This project consists of html5, css + bootstrap, and vanilla javascript. I used a facebook API to link his page on the contact page.</p>
				<p>I often sent updates to the artist to get ideas on what his thoughts were on design and features. This pushed me to better grasp the logic and styling that eventually made this project what it is.</p>
				<div className="project-links row">
					<div className="col s6">
						<a href="https://github.com/justingarcianm/aaronart.github.io" target="_blank" rel="noopener noreferrer" className="btn"><i className="fas fa-code"></i> Code</a>
					</div>
					<div className="col s6">
						<a href="https://justingarcianm.github.io/aaronart.github.io/" target="_blank" rel="noopener noreferrer" className="btn"><i className="fas fa-desktop"></i> Demo</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ArtistPage