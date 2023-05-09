import React, { useMemo, useState } from 'react';

import {
	BTN_ADD_AUTHOR_TEXT,
	BTN_CREATE_AUTHOR_TEXT,
	BTN_CREATE_COURSE_TEXT,
	BTN_REMOVE_AUTHOR_TEXT,
	BTN_UPDATE_COURSE_TEXT,
	INPUT_ENTER_AUTHOR_NAME_TEXT,
	INPUT_ENTER_DURATION_TEXT,
	INPUT_ENTER_TITLE_TEXT,
	TEXTAREA_DESCRIPTION_TEXT,
} from '../../constans';

import { dateGenerator } from '../../helpers/dateGeneratop';

import Button from '../../common/Button/Button';
import Textarea from '../../common/Textarea/Textarea';
import { pipeDuration } from '../../helpers/pipeDuration';
import Input from '../../common/Input/Input';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthors, getCourses, getUser } from '../../store/selectors';
import { addAuthorAC } from '../../store/authors/actionCreators';
import { addCourseAC, updateCourseAC } from '../../store/courses/actionCreator';
import { useEffect } from 'react';

function CourseForm() {
	const { courseId } = useParams();
	const courses = useSelector(getCourses);
	const courseInfo = courses.find((course) => course.id === courseId);
	const history = useNavigate();
	const dispatch = useDispatch();
	const authors = useSelector(getAuthors);
	const { token } = useSelector(getUser);
	const [newCourse, setNewCourse] = useState({
		title: '',
		description: '',
		creationDate: dateGenerator(),
		duration: 0,
		authors: [],
	});
	const [author, setAuthor] = useState({
		name: '',
	});
	const [courseAuthorsList, setCourseAuthorsList] = useState([]);
	const uniqAuthors = useMemo(
		() => authors.filter((author) => !newCourse.authors.includes(author.id)),
		[authors, newCourse.authors]
	);

	useEffect(() => {
		if (courseId && courseInfo) {
			setNewCourse({
				...newCourse,
				title: courseInfo.title,
				authors: courseInfo.authors,
				description: courseInfo.description,
				duration: courseInfo.duration,
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [courseId, courseInfo, authors]);

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		if (name === 'duration') {
			setNewCourse({ ...newCourse, duration: parseInt(value) });
		} else {
			setNewCourse({ ...newCourse, [name]: value });
		}
	};

	const createAuthor = (author) => {
		if (author.name.length > 1) {
			dispatch(addAuthorAC({ name: author.name, token }));
			setAuthor({
				name: '',
			});
		}
	};

	const addAuthor = (author) => {
		setCourseAuthorsList((prev) => [...prev, author]);
		setNewCourse({
			...newCourse,
			authors: [...newCourse.authors, author.id],
		});
	};

	const removeAuthor = (author) => {
		setCourseAuthorsList((prev) => prev.filter((a) => a.name !== author.name));
	};

	const createNewCourse = () => {
		if (Object.keys(newCourse).some((k) => newCourse[k].length === 0)) {
			alert('Please, fill in all fields');
		} else {
			courseId
				? dispatch(updateCourseAC({ id: courseId, token, course: newCourse }))
				: dispatch(addCourseAC({ course: newCourse, token }));
			history('/courses');
		}
	};

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
						{courseId ? BTN_UPDATE_COURSE_TEXT : BTN_CREATE_COURSE_TEXT}
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
							<Button onClick={() => createAuthor(author)} type='button'>
								{BTN_CREATE_AUTHOR_TEXT}
							</Button>
						</div>
					</div>
				</div>
				<div className='w-[50%]'>
					<h2 className='text-center'>Authors</h2>
					<ul>
						{uniqAuthors.map((author) => (
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

export default CourseForm;
