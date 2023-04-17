import React, { useContext } from 'react';
import { CreateCourseContex } from '../../CreateCourse';
import AuthorListItem from './AuthorsListItem';

const AuthorsList = () => {
	const { authorsList } = useContext(CreateCourseContex);
	return (
		<div className='w-[50%]'>
			<h2 className='text-center'>Authors</h2>
			<ul>
				{authorsList.map((a, i) => (
					<AuthorListItem key={a.id} author={a} index={i} />
				))}
			</ul>
		</div>
	);
};

export default AuthorsList;
