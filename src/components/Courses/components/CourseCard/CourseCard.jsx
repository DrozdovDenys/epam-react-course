import React from 'react';
import Button from '../../../../common/Button/Button';
import { BTN_COURSE_TEXT, mockedAuthorsList } from '../../../../constans';
import { getAuthorsNames } from '../../../../helpers/getAuthorsNames';

import { useNavigate } from 'react-router-dom';

function CourseCard({ course }) {
	const history = useNavigate();

	const handleButtonClick = () => {
		history(`/courses/${course.id}`);
	};

	return (
		<div className='flex justify-between border shadow-md p-5 my-5'>
			<div className='w-[70%]'>
				<h1 className='text-3xl font-bold mb-2'>{course.title}</h1>
				<p>{course.description}</p>
			</div>
			<ul className='flex w-[25%] flex-col justify-evenly whitespace-nowrap overflow-hidden text-ellipsis'>
				<li>
					<b>Authors: </b>
					<span>{getAuthorsNames(course.authors, mockedAuthorsList)}</span>
				</li>
				<li>
					<b>Duration: </b>
					<span>{course.duration}</span>
				</li>
				<li>
					<b>Creation: </b>
					<span>{course.creationDate.replace(/\//g, '.')}</span>
				</li>
				<li className='text-center mt-3 flex justify-evenly'>
					<Button onClick={handleButtonClick}>{BTN_COURSE_TEXT}</Button>
				</li>
			</ul>
		</div>
	);
}

export default CourseCard;
