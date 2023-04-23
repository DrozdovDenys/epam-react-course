import React from 'react';

import AddAuthors from './AddAuthors';
import AuthorsList from './AuthorsList';
import CourseAuthorsList from './CourseAuthorsList';
import Duration from './Duration';

const CourseAuthors = () => {
	return (
		<>
			<fieldset className='flex justify-between gap-5 mt-5'>
				<AddAuthors />
				<AuthorsList />
			</fieldset>

			<fieldset className='flex justify-between gap-5 mt-5'>
				<Duration />
				<CourseAuthorsList />
			</fieldset>
		</>
	);
};

export default CourseAuthors;
