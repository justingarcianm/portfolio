import React from 'react'

function LocalBistro() {
	return (
		<div className="row">
			<div className="col s12 m6">
				<img src={require("./img/localBistro.JPG")} alt="project" className="responsive-img z-depth-2" />
			</div>
			<div className="col s12 m6">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptates
					quaerat esse! Quo
					consequatur inventore deserunt quia et, officiis dolore enim autem totam culpa eaque praesentium
					suscipit, magnam iusto! Et nihil beatae numquam corrupti. Dicta illo necessitatibus quidem, aut
                        odit rerum, voluptatum laborum ad esse nisi dolores iste doloribus voluptas.</p>
				<div className="project-links row">
					<div className="col s6">
						<a href="code" className="btn"><i className="fas fa-code"></i> Code</a>
					</div>
					<div className="col s6">
						<a href="demo" className="btn"><i className="fas fa-desktop"></i> Demo</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LocalBistro