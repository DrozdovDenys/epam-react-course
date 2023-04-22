import React, { useEffect, useState } from 'react';

import {
	BTN_ADD_AUTHOR_TEXT,
	BTN_CREATE_AUTHOR_TEXT,
	BTN_CREATE_COURSE_TEXT,
	BTN_REMOVE_AUTHOR_TEXT,
	INPUT_ENTER_AUTHOR_NAME_TEXT,
	INPUT_ENTER_DURATION_TEXT,
	INPUT_ENTER_TITLE_TEXT,
	TEXTAREA_DESCRIPTION_TEXT,
	mockedAuthorsList,
	mockedCoursesList,
} from '../../constans';

import { dateGenerator } from '../../helpers/dateGeneratop';

import Button from '../../common/Button/Button';
import Textarea from '../../common/Textarea/Textarea';
import { pipeDuration } from '../../helpers/pipeDuration';
import Input from '../../common/Input/Input';
import { useNavigate } from 'react-router-dom';

function CreateCourse() {
	const history = useNavigate();
	const [newCourse, setNewCourse] = useState({
		id: String(Date.now()),
		title: '',
		description: '',
		creationDate: dateGenerator(),
		duration: '',
		authors: [],
	});
	const [author, setAuthor] = useState({
		id: '',
		name: '',
	});
	const [authorsList, setAuthorsList] = useState([]);
	const [courseAuthorsList, setCourseAuthorsList] = useState([]);

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		if (name === 'authorName') {
			setAuthor({
				id: String(Date.now()),
				name: value,
			});
		} else {
			setNewCourse({ ...newCourse, [name]: value });
		}
	};

	const createAuthor = () => {
		if (author.name.length > 1) {
			setAuthorsList([...authorsList, author]);
			mockedAuthorsList.push(author);
			setAuthor({
				id: '',
				name: '',
			});
		}
	};

	const addAuthor = (author) => {
		setAuthorsList((prevState) =>
			prevState.filter((a) => a.name !== author.name)
		);
		setCourseAuthorsList([...courseAuthorsList, author]);
		setNewCourse({
			...newCourse,
			authors: [...newCourse.authors, author.id],
		});
	};

	const removeAuthor = (author) => {
		setCourseAuthorsList((prevState) =>
			prevState.filter((a) => a.name !== author.name)
		);
		setNewCourse({
			...newCourse,
			authors: [...newCourse.authors].filter((id) => id !== author.id),
		});
		setAuthorsList([...authorsList, author]);
	};

	const createNewCourse = () => {
		if (Object.keys(newCourse).some((k) => newCourse[k].length === 0)) {
			alert('Please, fill in all fields');
		} else {
			mockedCoursesList.push(newCourse);
			history('/courses');
		}
	};

	useEffect(() => {
		setAuthorsList(mockedAuthorsList);
	}, []);

	return (
		<form className='p-5 border'>
			<fieldset>
				<div className='flex justify-between items-end mb-5'>
					<div className='flex flex-col'>
						<label htmlFor='inputTitle'>Title</label>
						<Input
							name='title'
							placeholder={INPUT_ENTER_TITLE_TEXT}
							id={'inputTitle'}
							onChange={handleChange}
							value={newCourse.title}
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
						value={newCourse.description}
					/>
				</div>
			</fieldset>

			<fieldset className='flex justify-between gap-5 mt-5'>
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
							value={author.name}
						/>
						<div className='w-[100%] text-center mt-2'>
							<Button onClick={createAuthor} type='button'>
								{BTN_CREATE_AUTHOR_TEXT}
							</Button>
						</div>
					</div>
				</div>
				<div className='w-[50%]'>
					<h2 className='text-center'>Authors</h2>
					<ul>
						{authorsList.map((author) => (
							<li
								key={author.id}
								className='flex justify-between mb-2 items-center last:mb-0'
							>
								{author.name}{' '}
								<Button type='button' onClick={() => addAuthor(author)}>
									{BTN_ADD_AUTHOR_TEXT}
								</Button>
							</li>
						))}
					</ul>
				</div>
			</fieldset>

			<fieldset className='flex justify-between gap-5 mt-5'>
				<div className='w-[50%]'>
					<h2 className='text-center'>Duration</h2>
					<div className='flex flex-col items-start gap-1'>
						<label htmlFor='duration'>Duration</label>
						<Input
							name='duration'
							type={'number'}
							min={1}
							placeholder={INPUT_ENTER_DURATION_TEXT}
							onChange={handleChange}
							id={'duration'}
							value={newCourse.duration}
						/>
						<div>
							<h3>
								Duration:{' '}
								<span className='font-bold text-2xl'>
									{pipeDuration(newCourse.duration)}
								</span>{' '}
								hours
							</h3>
						</div>
					</div>
				</div>
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
			</fieldset>
		</form>
	);
}

export default CreateCourse;
