import React, { useEffect, useState } from 'react';
import { BTN_ADD_COURSE_TEXT } from '../../constans';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';

import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCourses } from '../../store/courses/actionCreator';
import { getCourses, getUser } from '../../store/selectors';
import { getAuthorsAC } from '../../store/authors/actionCreators';
import { getUserRole } from '../../store/user/actionCreator';

function Courses() {
	const history = useNavigate();
	const dispatch = useDispatch();

	const { token } = useSelector(getUser);
	const { role } = useSelector(getUser);
	const coursesList = useSelector(getCourses);
	const [query, setQuery] = useState('');

	const courses = useMemo(
		() =>
			coursesList.filter(
				(course) =>
					course.id.toLowerCase().includes(query.toLowerCase()) ||
					course.title.toLowerCase().includes(query.toLowerCase())
			),
		[coursesList, query]
	);

	const addCourse = () => {
		history('/courses/add');
	};

	useEffect(() => {
		dispatch(fetchCourses());
		dispatch(getAuthorsAC());
		dispatch(getUserRole(token));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch]);

	return (
		<div className='border-2 shadow-md  p-5'>
			<div className='flex justify-between'>
				<SearchBar value={query} setQuery={setQuery} />{' '}
				{role === 'admin' && (
					<Button onClick={addCourse}>{BTN_ADD_COURSE_TEXT}</Button>
				)}
			</div>
			{courses.map((course) => (
				<CourseCard key={course.id} course={course} />
			))}{' '}
		</div>
	);
}

export default Courses;
