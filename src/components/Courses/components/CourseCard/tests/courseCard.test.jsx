import { render, screen } from '@testing-library/react';
import { Provider, useSelector } from 'react-redux';
import CourseCard from '../CourseCard';
import { BrowserRouter } from 'react-router-dom';

jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useSelector: jest.fn(),
}));

const mockedState = {
	user: {
		name: 'Admin',
		role: 'admin',
	},
	courses: [
		{
			id: '1',
			title: 'Title',
			description: 'Description',
			creationDate: '08/05/2023',
			duration: 120,
			authors: ['1.1'],
		},
	],
	authors: [
		{
			id: '1.1',
			name: 'Tester',
		},
	],
};

const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

describe('CourseCard component', () => {
	beforeEach(() => {
		useSelector.mockImplementation((selector) => selector(mockedState));
		const props = {
			...mockedState.courses[0],
			courseAuthors: mockedState.courses[0].authors
				.map(
					(authorId) =>
						mockedState.authors.find((author) => author.id === authorId)?.name
				)
				.toString()
				.split(',')
				.join(', '),
		};

		render(
			<Provider store={mockedStore}>
				<BrowserRouter>
					<CourseCard course={props} />
				</BrowserRouter>
			</Provider>
		);
	});
	it('should display title.', () => {
		expect(screen.getByText(/title/i)).toBeInTheDocument();
	});
	it('should display description.', () => {
		expect(screen.getByText(/description/i)).toBeInTheDocument();
	});
	it('should display duration in the correct format.', () => {
		expect(screen.getByText('02:00')).toBeInTheDocument();
	});
	it('should display authors list.', () => {
		expect(screen.getByText(/tester/i)).toBeInTheDocument();
	});
	it('should display created date in the correct format.', () => {
		expect(screen.getByText('08.05.2023')).toBeInTheDocument();
	});
});
