import { useContext } from 'react';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import {
	BTN_CREATE_AUTHOR_TEXT,
	INPUT_ENTER_AUTHOR_NAME_TEXT,
} from '../../../../constans';
import { CreateCourseContex } from '../../CreateCourse';

const AddAuthors = () => {
	const { handleChange, createAuthor, name } = useContext(CreateCourseContex);
	return (
		<div className='w-[50%]'>
			<h2 className='text-center'>Add author</h2>
			<div className='flex flex-col items-start gap-1'>
				<label htmlFor='authorName'>Author name</label>
				<Input
					name='authorName'
					type={'text'}
					placeholder={INPUT_ENTER_AUTHOR_NAME_TEXT}
					id={'authorName'}
					onChange={handleChange}
					value={name}
				/>
				<div className='w-[100%] text-center mt-2'>
					<Button onClick={createAuthor} type='button'>
						{BTN_CREATE_AUTHOR_TEXT}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default AddAuthors;
