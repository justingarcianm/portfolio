import React from 'react';


function Contact() {
	return (
		<section id="contact">
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
							<p>justingarcianm@gmail.com</p>
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Contact;