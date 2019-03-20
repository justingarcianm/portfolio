import React from 'react';


function Contact() {
	return (
		<section>
			<h2>Let's Talk | Let's Learn | Let's Work</h2>
			<p>Let's Start, please follow any of the links below</p>

			<div className="row">
				<div className="col s4">
					<a href="link.com">
						<i class="fab fa-github-square"></i>
						<p>Github</p>
					</a>
				</div>
				<div className="col s4">
					<a href="link.com">
						<i class="fas fa-file"></i>
						<p>Resume</p>
					</a>
				</div>
				<div className="col s4">
					<a href="link.com">
						<i class="fas fa-envelope"></i>
						<p>justingarcianm@gmail.com</p>
					</a>
				</div>
			</div>
		</section>
	)
}
export default Contact;