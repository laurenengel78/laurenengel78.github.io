import React from 'react';
import { Fade } from 'react-awesome-reveal';
import CookAILogo from './images/cookailogo.png';
import DataFoxLogo from './images/datafoxlogo.png';
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
									</div>
							</div>

							<div className="project_logo">
								<img src={DataFoxLogo} alt="DATA_Fox"/>
							</div>

							<div className="project_text_container">
								<div className="project_title">DATA_Fox</div>
									<div className="project_description">
										DATA_Fox is an <strong> Flask </strong>and<strong> Selenium </strong>powered "phone book". <br />
										Enter in information you already know about a person or company you want to research, <br />
										and DATA_Fox will scrape the web to fill in the gaps. <br />
										<br />
										<strong>Full version coming in May 2025!</strong>
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