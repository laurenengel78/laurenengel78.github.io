import React from 'react';
import { Fade } from 'react-awesome-reveal';
import './App.css';

export const skill_list = [
	'Java', 'JavaScript', 'Python','Linux', 'C', 'C++', 'Git', 'OCaml', 'Prolog', 'SQL', 'OpenAI', 'AWS', 'Flask', 'Firebase', 'HTML', 'CSS', 'Material UI', 'Next.js', 'React.js', 'React Native', 'Selenium', 'Playwright', 'Microsoft Office', 'Power BI'
];

function ListSkills({ skills }) {
	return (
			<div className="skills_container">
				{skills.map((skill, index) => (
					<div key={index} className="skills_item">
						{skill}
					</div>
				))}
			</div>
	)

};

const Skills = () => {
	return (
		<div>
			<Fade delay={300} duration={1500} triggerOnce>
				<section id="skills">
 					<div className="section_header">Skills</div>
					<ListSkills skills={skill_list} />
				</section>
			</Fade>
		</div>
	)
};

export default Skills;
