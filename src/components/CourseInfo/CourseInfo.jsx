import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { dateGenerator, getAuthorsNames, pipeDuration } from 'helpers';
import { mockedCoursesList } from 'constant';

function CourseInfo() {
	const { courseId } = useParams();

	const course = mockedCoursesList.find((course) => course.id === courseId);

	if (!course) {
		return <div className='mt-10 text-center'>This course doesn't exist</div>;
	}

	return (
		<div className='min-w-96  mx-10 pt-6 '>
			<Link to='/courses'>
				<span> &#10094;</span> Back to courses
			</Link>

			<h1 className='mb-20 mt-3 text-center text-4xl font-semibold'>
				{course.title}
			</h1>
			<div className='flex flex-row gap-28'>
				<div className='basis-2/3'>{course.description}</div>
				<div className='basis-1/3'>
					<div className=' space-y-2'>
						<p className='text-sm'>
							<b>ID: </b>
							{course.id}
						</p>
						<p className='text-sm'>
							<b>Duration: </b>
							{pipeDuration(course.duration)} hours
						</p>
						<p className='text-sm'>
							<b>Created: </b>
							{dateGenerator(course.creationDate)}
						</p>
						<p className='truncate text-sm'>
							<b>Author: </b>
							{getAuthorsNames(course.authors).join(', ')}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CourseInfo;
