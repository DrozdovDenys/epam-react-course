import React, { createContext, useEffect, useState } from 'react';

import { mockedAuthorsList, mockedCoursesList } from '../../constans';

import { dateGenerator } from '../../helpers/dateGeneratop';

import CourseAuthors from './components/CourseAuthors/CourseAuthors';
import CourseDescription from './components/CourseDescription';

export const CreateCourseContex = createContext();

const CreateCourse = ({ setIsOpen }) => {
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
			setIsOpen(false);
		}
	};

	useEffect(() => {
		setAuthorsList(mockedAuthorsList);
	}, []);

	return (
		<CreateCourseContex.Provider
			value={{
				title: newCourse.title,
				description: newCourse.description,
				duration: newCourse.duration,
				handleChange,
				createNewCourse,
				createAuthor,
				addAuthor,
				removeAuthor,
				authorsList,
				courseAuthorsList,
				name: author.name,
			}}
		>
			<form className='p-5 border'>
				<CourseDescription />
				<CourseAuthors />
			</form>
		</CreateCourseContex.Provider>
	);
};

export default CreateCourse;
