import React from 'react'

function LocalBistro() {
	return (
		<div className="row">
			<div className="col push-l6 l6 m12">
				<img src={require("./img/localBistro.JPG")} alt="project" className="responsive-img z-depth-2" />
			</div>
			<div className="col pull-l6 l6 m12">
				<div className="divider"></div>
				<h3>Local Bistro</h3>
				<p>I wanted to create a template for potential restuarants in my area. I often saw websites that were either bloated or confusing, so I created this app to streamline the important information and get the user to a table.</p>
				<p>I used React JS, with a google API and simple datepicker API for a reservation form.</p>
				<p>I previously created this project in html, css, and vanilla javascript; but I thought it would be a good excercise to make it a React app.</p>
				<div className="project-links row">
					<div className="col s6">
						<a href="https://github.com/justingarcianm/localbistroreact" target="_blank" rel="noopener noreferrer" className="btn"><i className="fas fa-code"></i> Code</a>
					</div>
					<div className="col s6">
						<a href="https://justingarcianm.github.io/localbistroreact/" target="_blank" rel="noopener noreferrer" className="btn"><i className="fas fa-desktop"></i> Demo</a>
					</div>
				</div>
			</div>

		</div>
	)
}

export default LocalBistro