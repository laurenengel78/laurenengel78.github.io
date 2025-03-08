// Navigation bar

import React from 'react';
import './App.css';

const Navigation = () => {
	/* Prevents different sections of the website from showing up
	as different pages in the url */
	const handleScroll = (event, targetId) => {
		event.preventDefault();
		document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  	};

	return (
		<nav className="nav_bar">
			<div className="nav_links">
				<a href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</a>
				<a href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a>
				<a href="#skills" onClick={(e) => handleScroll(e, 'skills')}>Skills</a>
				<a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Projects</a>
				<a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a>
			</div>
		</nav>
	)
};

export default Navigation;
