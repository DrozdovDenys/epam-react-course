import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import './App.css';
import Registration from './components/Registration/Registration';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login/Login';
import CourseInfo from './components/Courses/components/CourseCard/CourseInfo';
import { useEffect } from 'react';
import CourseForm from './components/CreateCourse/CourseForm';

function App() {
	const history = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem('token');

		if (token) {
			history('/courses');
		} else {
			history('/');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Navigate to='/login' />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/login' element={<Login />} />
				<Route path='/courses' element={<Courses />} />
				<Route path='/courses/add' element={<CourseForm />} />
				<Route path='/courses/:courseId' element={<CourseInfo />} />
				<Route path='/:redirect' element={<Navigate to='/' />} />
			</Routes>
		</div>
	);
}

export default App;
