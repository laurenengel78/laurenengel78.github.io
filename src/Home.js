import React from 'react';
import { ReactTyped } from 'react-typed';
import './App.css';

const Home = () => {
	return (
		<div>
			<section id="home">

				<div className="name_text">
					<ReactTyped
						strings={["Hi, I'm Lauren"]}
						typeSpeed={90}
						backSpeed={50}
						loop={false}
						showCursor
						cursorChar="|"
					/>
				</div>
				<div className="section_body">an aspiring software engineer</div>
			</section>
		</div>
	)
};

export default Home;
