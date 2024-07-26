import Navigation from './Navigation.js';
import Home from './Home.js';
import About from './About.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Contact from './Contact.js';

import './App.css';

const App = () => {
	return (
		<div className="container">
			<Navigation />
			<Home />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
	)
  };

export default App;

