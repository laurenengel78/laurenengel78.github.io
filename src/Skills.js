import React from 'react';
import './App.css';

//import javaImage from './images/java.png';

export const skill_list = [
	'Java', 'JavaScript', 'Python','Linux', 'C', 'C++', 'Git', 'OCaml', 'SQL', 'OpenAI', 'Flask', 'HTML', 'CSS', 'ReactJS', 'React Native'
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
			<section id="skills">

 			<div className="section_header">Skills</div>

			<ListSkills skills={skill_list} />

			</section>
		</div>
	)
};

export default Skills;
