import React from 'react';
import './App.css';

const About = () => {
	return (
		<div>
			<section id="about">

	 			<div className="section_header">About</div>

				<div className="section_body">
					Growing up, I always wondered about the mechanism of software and how the computer knew exactly what to put on the screen. <br />
                                       	When I took an Intro to Java class my freshman year of high school, I discovered it and was hooked. <br />
					I am now a computer science senior at Kutztown University and have experience in both frontend and backend development. <br />
					I also plan to pursue a master's in computer science following my completion of my undergraduate studies. <br />
                               	</div>

				<div className="resume_button_container">
					<a className="resume_button" href="/Resume Lauren Engel.pdf" download = "Resume Lauren Engel.pdf">
						Resume
					</a>
				</div>

			</section>
		</div>
	)
};

export default About;
