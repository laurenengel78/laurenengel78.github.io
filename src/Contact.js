import React from 'react';
import './App.css';

import linkedinLogo from './images/linkedin.png';
import githubLogo from './images/github.png';
// https://icons8.com/icon/12580/email
import emailLogo from './images/email.png';

const Contact = () => {
	return (
		<div>

		<section id="contact">

			<div className="section_header">Contact</div>

			<div className="contact_container">

			<div className="contact_item">
				<div className="contact_logo_circle">
					<img src={linkedinLogo} alt="LinkedIn" className="contact_logo" />
				</div>
				<a href="https://www.linkedin.com/in/lauren-engel-3311b32b2/" target="_blank" rel="noopener noreferrer">
					<div className="contact_link">LinkedIn</div>
				</a>
			</div>
			<div className="contact_item">
				<div className="contact_logo_circle">
					<img src={githubLogo} alt="GitHub" className="contact_logo" />
				</div>
				<a href="https://github.com/laurenengel78/" target="_blank" rel="noopener noreferrer">
					<div className="contact_link">GitHub</div>
				</a>
			</div>

			<div className="contact_item">
				<div className="contact_logo_circle">
					<img src={emailLogo} alt="Email" className="contact_logo" />
				</div>
				<a href="mailto:laurengel78@gmail.com" target="_blank" rel="noopener noreferrer">
					<div className="contact_link">Email</div>
				</a>
			</div>

			</div>

		</section>

		</div>
	)
};

export default Contact;
