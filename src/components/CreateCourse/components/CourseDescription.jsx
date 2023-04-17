import React, { useContext } from 'react';
import Button from '../../../common/Button/Button';
import Input from '../../../common/Input/Input';
import Textarea from '../../../common/Textarea/Textarea';
import {
	BTN_CREATE_COURSE_TEXT,
	INPUT_ENTER_TITLE_TEXT,
	TEXTAREA_DESCRIPTION_TEXT,
} from '../../../constans';
import { CreateCourseContex } from '../CreateCourse';

const CourseDescription = () => {
	const { title, description, handleChange, createNewCourse } = useContext(
		CreateCourseContex
	);
	return (
		<fieldset>
			<div className='flex justify-between items-end mb-5'>
				<div className='flex flex-col'>
					<label htmlFor='inputTitle'>Title</label>
					<Input
						name='title'
						placeholder={INPUT_ENTER_TITLE_TEXT}
						id={'inputTitle'}
						onChange={handleChange}
						value={title}
					/>
				</div>
				<Button type='button' onClick={createNewCourse}>
					{BTN_CREATE_COURSE_TEXT}
				</Button>
			</div>
			<div className='flex flex-col'>
				<label htmlFor='textareaDescription'>Description</label>
				<Textarea
					name='description'
					id={'textareaDescription'}
					placeholder={TEXTAREA_DESCRIPTION_TEXT}
					onChange={handleChange}
					value={description}
				/>
			</div>
		</fieldset>
	);
};

export default CourseDescription;
