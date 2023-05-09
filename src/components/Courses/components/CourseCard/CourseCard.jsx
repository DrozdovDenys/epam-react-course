import React from 'react';
import Button from '../../../../common/Button/Button';
import { BTN_COURSE_TEXT } from '../../../../constans';
import { getAuthorsNames } from '../../../../helpers/getAuthorsNames';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthors, getUser } from '../../../../store/selectors';

import { deleteCourse } from '../../../../store/courses/actionCreator';
import { pipeDuration } from '../../../../helpers/pipeDuration';

function CourseCard({ course }) {
	const history = useNavigate();
	const dispatch = useDispatch();

	const { token, role } = useSelector(getUser);
	const authors = useSelector(getAuthors);

	const handleButtonClick = () => {
		history(`/courses/${course.id}`);
	};

	return (
		<div
			className='flex justify-between border shadow-md p-5 my-5'
			data-testid='course'
		>
			<div className='w-[70%]'>
				<h1 className='text-3xl font-bold mb-2'>{course.title}</h1>
				<p>{course.description}</p>
			</div>
			<ul className='flex w-[25%] flex-col justify-evenly whitespace-nowrap overflow-hidden text-ellipsis'>
				<li>
					<b>Authors: </b>
					<span>{getAuthorsNames(course.authors, authors)}</span>
				</li>
				<li>
					<b>Duration: </b>
					<span>{pipeDuration(course.duration)}</span>
				</li>
				<li>
					<b>Creation: </b>
					<span>{course.creationDate.replace(/\//g, '.')}</span>
				</li>
				<li className='text-center mt-3 flex justify-evenly'>
					<Button onClick={handleButtonClick}>{BTN_COURSE_TEXT}</Button>
					{role === 'admin' && (
						<>
							<Button onClick={() => history(`/courses/update/${course.id}`)}>
								🖊️
							</Button>
							<Button
								onClick={() => dispatch(deleteCourse({ id: course.id, token }))}
							>
								🗑️
							</Button>
						</>
					)}
				</li>
			</ul>
		</div>
	);
}

export default CourseCard;
