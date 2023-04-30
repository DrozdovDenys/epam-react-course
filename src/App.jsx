import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import './App.css';
import Registration from './components/Registration/Registration';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import CourseInfo from './components/Courses/components/CourseCard/CourseInfo';
import CourseForm from './components/CourseForm/CourseForm';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { useSelector } from 'react-redux';
import { getUser } from './store/selectors';

function App() {
	const { isAuth } = useSelector(getUser);

	return (
		<div className='App'>
			<Header />
			{isAuth ? (
				<Routes>
					<Route path='/' element={<Navigate to='/login' />} />
					<Route path='/registration' element={<Registration />} />
					<Route path='/login' element={<Login />} />
					<Route path='/courses' element={<Courses />} />

					<Route
						path='/courses/add'
						element={
							<PrivateRoute>
								<CourseForm />
							</PrivateRoute>
						}
					/>
					<Route
						path='/courses/update/:courseId'
						element={
							<PrivateRoute>
								<CourseForm />
							</PrivateRoute>
						}
					/>
					<Route path='/courses/:courseId' element={<CourseInfo />} />
					<Route path='/:redirect' element={<Navigate to='/' />} />
				</Routes>
			) : (
				<Routes>
					<Route path='/' element={<Navigate to='/login' />} />
					<Route path='/registration' element={<Registration />} />
					<Route path='/login' element={<Login />} />
					<Route path='/login/:redirect' element={<Navigate to='/' />} />
					<Route path='/:redirect' element={<Navigate to='/' />} />
				</Routes>
			)}
		</div>
	);
}

export default App;
