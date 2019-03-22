import React from 'react';


function Contact() {

	const navToggle = () => {
		const navBar = document.querySelectorAll(".navbar-custom ul li i")
		for (let i = 0; i < navBar.length; i++) {
			navBar[i].classList.remove("active")
			navBar[2].classList.add("active")
		}
	}

	return (
		<section id="contact" onMouseOver={navToggle}>
			<div className="container">
				<h2>Let's Talk | Let's Learn | Let's Work</h2>
				<p>Let's start, please follow any of the links below</p>

				<div className="row">
					<div className="col s4">
						<a href="link.com">
							<i className="fab fa-github-square"></i>
							<p>Github</p>
						</a>
					</div>
					<div className="col s4">
						<a href="link.com">
							<i className="fas fa-file"></i>
							<p>Resume</p>
						</a>
					</div>
					<div className="col s4">
						<a href="link.com">
							<i className="fas fa-envelope"></i>
							<p>Email</p>
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Contact;