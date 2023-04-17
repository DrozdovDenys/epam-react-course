import React, { useContext } from 'react';
import Button from '../../../../common/Button/Button';
import { BTN_ADD_AUTHOR_TEXT } from '../../../../constans';
import { CreateCourseContex } from '../../CreateCourse';

const AuthorsListItem = ({ author }) => {
	const { addAuthor } = useContext(CreateCourseContex);
	return (
		<li className='flex justify-between mb-2 items-center last:mb-0'>
			{author.name}{' '}
			<Button type='button' onClick={() => addAuthor(author)}>
				{BTN_ADD_AUTHOR_TEXT}
			</Button>
		</li>
	);
};

export default AuthorsListItem;
