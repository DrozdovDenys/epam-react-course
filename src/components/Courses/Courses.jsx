import React, { useEffect, useState } from 'react';
import { BTN_ADD_COURSE_TEXT, mockedCoursesList } from '../../constans';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';

const Courses = ({ setIsOpen }) => {
	const [coursesList, setCoursesList] = useState(mockedCoursesList);
	const [query, setQuery] = useState('');

	const inputHandler = (value) => {
		setQuery(value);
	};
	const btnSearchHandler = () => {
		const searchedCourses = mockedCoursesList.filter(
			(course) =>
				course.title.toLowerCase().includes(query.toLowerCase()) ||
				course.id.toLowerCase().includes(query.toLowerCase())
		);
		setCoursesList(searchedCourses);
	};

	useEffect(() => {
		if (!query) {
			setCoursesList(mockedCoursesList);
		}
	}, [query]);

	return (
		<div className='border-2 shadow-md  p-5'>
			{' '}
			<div className='flex justify-between'>
				<SearchBar
					value={query}
					setQuery={setQuery}
					inputHandler={inputHandler}
					btnSearchHandler={btnSearchHandler}
				/>{' '}
				<Button
					onClick={() => {
						setIsOpen(true);
					}}
				>
					{BTN_ADD_COURSE_TEXT}
				</Button>
			</div>
			{coursesList.map((course, i) => (
				<CourseCard key={course.id} course={course} i={i} />
			))}{' '}
		</div>
	);
};

export default Courses;
