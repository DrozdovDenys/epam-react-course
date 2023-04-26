import React, { useEffect, useState } from 'react';
import { BTN_ADD_COURSE_TEXT } from '../../constans';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';

import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getCoursesAC } from '../../store/courses/actionCreator';
import { getCourses } from '../../store/selectors';
import { getAuthorsAC } from '../../store/authors/actionCreators';

function Courses() {
	const [query, setQuery] = useState('');
	const history = useNavigate();
	const dispatch = useDispatch();
	const coursesList = useSelector(getCourses);

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
		dispatch(getCoursesAC());
		dispatch(getAuthorsAC());
	}, [dispatch]);

	return (
		<div className='border-2 shadow-md  p-5'>
			<div className='flex justify-between'>
				<SearchBar value={query} setQuery={setQuery} />{' '}
				<Button onClick={addCourse}>{BTN_ADD_COURSE_TEXT}</Button>
			</div>
			{courses.map((course) => (
				<CourseCard key={course.id} course={course} />
			))}{' '}
		</div>
	);
}

export default Courses;
