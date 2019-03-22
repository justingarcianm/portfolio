import React from 'react'

function BlogSite() {
	return (
		<div className="row">
			<div className="col m12 l6">
				<img src={require("./img/blogSite.JPG")} alt="project" className="responsive-img z-depth-2" />
			</div>
			<div className="col m12 l6">
				<div className="divider"></div>
				<h3>Blog Site</h3>
				<p>Star Wars: Galaxy of Heroes has made love mobile games. Being a huge Star Wars fan, it was a no brainer to create a blog site for the game. Although, there are already forums dedicated to this type of content; I wanted to cerate a clean look with more opportunities to find what you need if you play the game as seroiusly as I do.</p>
				<p>This site uses Node JS with Express to create mulptiple pages that uses the CRUD method to create, edit, and delete blog posts as well as comments. I used Materialize CSS and vanilla javascript within ejs. A Twitter API is used to keep up to date with current game features.</p>
				<p>I took this project from a completed project I created from a online course, I knew it would be a great challenge to take that knowledge into a new enviornment and the experience gained from it was worth it.</p>
				<div className="project-links row">
					<div className="col s6">
						<a href="https://github.com/justingarcianm/blogSite" target="_blank" rel="noopener noreferrer" className="btn"><i className="fas fa-code"></i> Code</a>
					</div>
					<div className="col s6">
						<a href="https://whispering-earth-69776.herokuapp.com/blog" target="_blank" rel="noopener noreferrer" className="btn"><i className="fas fa-desktop"></i> Demo</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BlogSite