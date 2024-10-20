import React from 'react';
import { Fade } from 'react-awesome-reveal';
import CookAILogo from './images/cookailogo.png';
import './App.css';

const Projects = () => {
	return (
		<div>
			<Fade delay={300} duration={1500} triggerOnce>
				<section id = "projects">

	 				<div className="section_header">Projects</div>

					<div className="projects_container">

						<div className="projects_item">
							<div className="project_logo">
								<img src={CookAILogo} alt="CookAI"/>
							</div>

							<div className="project_text_container">
								<div className="project_title">CookAI</div>
									<div className="project_description">
										CookAI is an <strong> Flask </strong>and<strong> OpenAI </strong>powered recipe generator. <br />
										Generate recipes based on the ingredients you have, as well as your <br />
										dietary preferences and restrictions, serving size, and time limit! <br />
										<br />
										<strong>Full version coming in December 2024!</strong>
									</div>
							</div>
						</div>

						<div className="section_body">
							More projects coming soon!
						</div>
					</div>
				</section>
			</Fade>
		</div>
	)
};

export default Projects;
