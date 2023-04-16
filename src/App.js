import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import './App.css';
import { useState } from 'react';

function App() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className='App'>
			<Header />
			{!isOpen && <Courses setIsOpen={setIsOpen} />}
			{isOpen && <CreateCourse setIsOpen={setIsOpen} />}
		</div>
	);
}

export default App;
