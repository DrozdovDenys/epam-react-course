import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../../../common/Button/Button';
import { BTN_COURSE_INFO_TEXT } from '../../../../constans';
import { getAuthorsNames } from '../../../../helpers/getAuthorsNames';
import { pipeDuration } from '../../../../helpers/pipeDuration';
import { getAuthors, getCourses } from '../../../../store/selectors';
import { useSelector } from 'react-redux';

function CourseInfo() {
	const { courseId } = useParams();
	const coursesList = useSelector(getCourses);
	const authorsList = useSelector(getAuthors);
	const course = coursesList.find((course) => course.id === courseId);

	const history = useNavigate();
	return (
		<>
			{course ? (
				<div className='border shadow-md  p-5 my-5'>
					<Button onClick={() => history('/courses')}>
						<span> &lArr;</span> {BTN_COURSE_INFO_TEXT}
					</Button>
					<h1 className='text-3xl font-bold mb-5 text-center'>
						{course.title}
					</h1>
					<div className='flex justify-between '>
						<div className='w-[70%]'>
							<p>{course.description}</p>
						</div>
						<ul className='flex w-[25%] flex-col'>
							<li>
								<b>ID: </b>
								<span>{course.id}</span>
							</li>
							<li>
								<b>Duration: </b>
								<span>{pipeDuration(course.duration)} hours</span>
							</li>
							<li>
								<b>Created: </b>
								<span>{course.creationDate.replace(/\//g, '.')}</span>
							</li>
							<li>
								<b>Authors: </b>
								<span className=''>
									{getAuthorsNames(course.authors, authorsList)}
								</span>
							</li>
						</ul>
					</div>
				</div>
			) : (
				<h1>Not found...</h1>
			)}
		</>
	);
}

export default CourseInfo;
