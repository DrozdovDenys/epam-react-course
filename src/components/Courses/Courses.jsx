import React, { useState } from 'react';
import { BTN_ADD_COURSE_TEXT, mockedCoursesList } from '../../constans';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

function Courses() {
	const [query, setQuery] = useState('');
	const history = useNavigate();

	const courses = useMemo(
		() =>
			mockedCoursesList.filter(
				(course) =>
					course.id.toLowerCase().includes(query.toLowerCase()) ||
					course.title.toLowerCase().includes(query.toLowerCase())
			),
		[query]
	);

	return (
		<div className='border-2 shadow-md  p-5'>
			<div className='flex justify-between'>
				<SearchBar value={query} setQuery={setQuery} />{' '}
				<Button
					onClick={() => {
						history('/courses/add');
					}}
				>
					{BTN_ADD_COURSE_TEXT}
				</Button>
			</div>
			{courses.map((course) => (
				<CourseCard key={course.id} course={course} />
			))}{' '}
		</div>
	);
}

export default Courses;
