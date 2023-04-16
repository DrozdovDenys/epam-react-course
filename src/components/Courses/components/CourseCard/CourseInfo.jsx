import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../../../common/Button/Button';
import {
	BTN_COURSE_INFO_TEXT,
	mockedAuthorsList,
	mockedCoursesList,
} from '../../../../constans';
import { getAuthorsNames } from '../../../../helpers/getAuthorsNames';
import { pipeDuration } from '../../../../helpers/pipeDuration';

const CourseInfo = () => {
	const { courseId } = useParams();
	const course = mockedCoursesList[courseId];
	const history = useNavigate();
	return (
		<>
			{course ? (
				<div className='border shadow-md  p-5 my-5'>
					<Button onClick={() => history('/courses')}>
						{BTN_COURSE_INFO_TEXT}
					</Button>
					<h1 className='text-3xl font-bold mb-5 text-center'>
						{course.title}
					</h1>
					<div className='flex justify-between '>
						<div className='w-[70%]'>
							<p>
								{course.description} Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Molestiae assumenda consequuntur enim
								exercitationem optio, doloremque dicta facere aliquid maiores,
								ipsum quidem suscipit ipsa perspiciatis. Autem cum praesentium
								odit recusandae quae?
							</p>
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
									{getAuthorsNames(course.authors, mockedAuthorsList)}
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
};

export default CourseInfo;
