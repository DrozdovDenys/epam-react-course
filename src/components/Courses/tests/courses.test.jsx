import { BrowserRouter, Route, Routes, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { render, screen, fireEvent } from '@testing-library/react';

import Courses from '../Courses';

describe('Courses', () => {
	const mockedState = {
		user: {
			name: 'Admin',
			role: 'admin',
		},
		courses: [
			{
				id: '2',
				title: 'Title2',
				description: 'Description2',
				creationDate: '08/05/2023',
				duration: 120,
				authors: ['2.1'],
			},
			{
				id: '3',
				title: 'Title3',
				description: 'Title3',
				creationDate: '08/05/2023',
				duration: 120,
				authors: ['3.1'],
			},
		],
		authors: [
			{
				id: '2.1',
				name: 'Tester',
			},
		],
	};
	const mockedStore = {
		getState: () => mockedState,
		subscribe: jest.fn(),
		dispatch: jest.fn(),
	};

	it('should display amount of CourseCard equal length of courses array.', () => {
		render(
			<Provider store={mockedStore}>
				<BrowserRouter>
					<Courses />
				</BrowserRouter>
			</Provider>
		);

		expect(screen.getAllByTestId('course')).toHaveLength(2);
	});
	it('should display Empty container if courses array length is 0', () => {
		const emptyCoursesState = {
			...mockedState,
			courses: [],
		};
		const storeWithEmptyCourses = {
			getState: () => emptyCoursesState,
			subscribe: jest.fn(),
			dispatch: jest.fn(),
		};
		render(
			<Provider store={storeWithEmptyCourses}>
				<BrowserRouter>
					<Courses />
				</BrowserRouter>
			</Provider>
		);
		expect(screen.queryAllByTestId('course')).toHaveLength(0);
	});
	it('should show CourseForm after a click on a button `Add new course`', () => {
		render(
			<Provider store={mockedStore}>
				<MemoryRouter initialEntries={['/courses']}>
					<Routes>
						<Route path='/courses' element={<Courses />} />
						<Route path='/courses/add' element={<div>CourseForm</div>} />
					</Routes>
				</MemoryRouter>
			</Provider>
		);

		const button = screen.getByRole('button', { name: /add new course/i });
		expect(button).toBeInTheDocument();

		fireEvent.click(button);
		expect(screen.getByText(/CourseForm/i)).toBeInTheDocument();
	});
});
