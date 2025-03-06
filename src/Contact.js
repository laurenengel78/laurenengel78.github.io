import React from 'react';
import { Fade } from 'react-awesome-reveal';
import './App.css';

import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";

const Contact = () => {
	return (
		<div>
			<Fade delay={300} duration={1500} triggerOnce>
				<section id="contact">
					<div className="section_header">Contact</div>

					<div className="contact_container">

						<div className="contact_item">
							<div className="contact_circle">
								{/* <img src={linkedinLogo} alt="LinkedIn" /> */}
								<AiFillLinkedin className="contact_logo"/>
							</div>

							<a href="https://www.linkedin.com/in/laurenengel/" target="_blank" rel="noopener noreferrer">
								<div className="contact_link">LinkedIn</div>
							</a>
						</div>

						<div className="contact_item">
							<div className="contact_circle">
								{/* <img src={githubLogo} alt="GitHub" /> */}
								<AiFillGithub className="contact_logo"/>
							</div>
							<a href="https://github.com/laurenengel78/" target="_blank" rel="noopener noreferrer">
								<div className="contact_link">GitHub</div>
							</a>
						</div>

						<div className="contact_item">
							<div className="contact_circle">
								{/* <img src={emailLogo} alt="Email" /> */}
								<AiFillMail className="contact_logo"/>
							</div>
							<a href="mailto:laurengel78@gmail.com" target="_blank" rel="noopener noreferrer">
								<div className="contact_link">Email</div>
							</a>
						</div>
					</div>
				</section>
			</Fade>
		</div>
	)
};

export default Contact;
