import React from 'react';


function Projects() {
	return (
		<section className="container" id="projects">
			<div className="row">
				<div className="col s12">
					<h2>Projects</h2>
				</div>
			</div>
			<div className="row">
				<div className="col s12 m6">
					<img src={require("../img/artistSite.JPG")} alt="project" className="responsive-img" />
				</div>
				<div className="col s12 m6">
					<p class="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptates
						quaerat esse! Quo
						consequatur inventore deserunt quia et, officiis dolore enim autem totam culpa eaque praesentium
						suscipit, magnam iusto! Et nihil beatae numquam corrupti. Dicta illo necessitatibus quidem, aut
                        odit rerum, voluptatum laborum ad esse nisi dolores iste doloribus voluptas.</p>
					<div className="project-links">
						<a href="code" className="btn"><i class="fas fa-code"></i> Code</a>
						<a href="demo" className="btn"><i class="fas fa-desktop"></i> Demo</a>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col s12 m6">
					<img src={require("../img/localBistro.JPG")} alt="project" className="responsive-img" />
				</div>
				<div className="col s12 m6">
					<p class="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptates
						quaerat esse! Quo
						consequatur inventore deserunt quia et, officiis dolore enim autem totam culpa eaque praesentium
						suscipit, magnam iusto! Et nihil beatae numquam corrupti. Dicta illo necessitatibus quidem, aut
                        odit rerum, voluptatum laborum ad esse nisi dolores iste doloribus voluptas.</p>
					<div className="project-links">
						<a href="code" className="btn"><i class="fas fa-code"></i> Code</a>
						<a href="demo" className="btn"><i class="fas fa-desktop"></i> Demo</a>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col s12 m6">
					<img src={require("../img/yelpCamp.JPG")} alt="project" className="responsive-img" />
				</div>
				<div className="col s12 m6">
					<p class="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptates
						quaerat esse! Quo
						consequatur inventore deserunt quia et, officiis dolore enim autem totam culpa eaque praesentium
						suscipit, magnam iusto! Et nihil beatae numquam corrupti. Dicta illo necessitatibus quidem, aut
                        odit rerum, voluptatum laborum ad esse nisi dolores iste doloribus voluptas.</p>
					<div className="project-links">
						<a href="code" className="btn"><i class="fas fa-code"></i> Code</a>
						<a href="demo" className="btn"><i class="fas fa-desktop"></i> Demo</a>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col s12">
					<a href="github.com" className="btn">See More</a>
				</div>
			</div>
		</section>
	)
}
export default Projects;