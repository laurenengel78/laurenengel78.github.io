import React from 'react';
import { Fade } from 'react-awesome-reveal';
import './App.css';

const About = () => {
	return (
		<div>
			<Fade direction delay={300} duration={1500} triggerOnce>
				<section id="about">

	 				<div className="section_header">About</div>

					<div className="section_body">
						Growing up, I always wondered about the mechanism of software and how the computer knew exactly what to put on the screen. <br />
                                       		When I took an Intro to Java class my freshman year of high school, I discovered it and was hooked. <br />
						I am now a computer science senior at Kutztown University and have experience in application development, web development,
						and database management. <br />
						I'm looking forward to starting my career in software development. <br />
                               		</div>

					<div className="resume_button_container">
						<a className="resume_button" href="/Lauren Engel.pdf" download = "Lauren Engel.pdf">
							Resume
						</a>
					</div>

				</section>
			</Fade>
		</div>
	)
};

export default About;
