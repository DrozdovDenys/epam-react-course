import React, { useContext } from 'react';
import Button from '../../../../common/Button/Button';
import { BTN_REMOVE_AUTHOR_TEXT } from '../../../../constans';
import { CreateCourseContex } from '../../CreateCourse';

const CourseAuthorsList = () => {
	const { courseAuthorsList, removeAuthor } = useContext(CreateCourseContex);
	return (
		<div className='w-[50%] text-center'>
			<h2>Course authors</h2>
			<ul>
				{' '}
				{!courseAuthorsList.length ? (
					<li>Author list is empty</li>
				) : (
					courseAuthorsList.map((a) => (
						<li
							key={a.id}
							className='flex justify-between mb-2 items-center last:mb-0'
						>
							{a.name}{' '}
							<Button type='button' onClick={() => removeAuthor(a)}>
								{BTN_REMOVE_AUTHOR_TEXT}
							</Button>
						</li>
					))
				)}
			</ul>
		</div>
	);
};

export default CourseAuthorsList;
