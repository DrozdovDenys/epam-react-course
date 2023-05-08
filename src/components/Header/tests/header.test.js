import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import Header from '../Header';

jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useSelector: jest.fn(),
}));

const mockState = { user: { name: 'Tester', token: 'mockToken' } };
const mockedStore = {
	getState: () => mockState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

describe('Header component', () => {
	it('should have logo', () => {
		useSelector.mockImplementation((selector) => selector(mockState));

		render(
			<Provider store={mockedStore}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>
		);

		const logo = screen.getByAltText(/logo/i);

		expect(logo).toBeInTheDocument();
	});

	it('should have user`s name', () => {
		useSelector.mockImplementation((selector) => selector(mockState));

		render(
			<Provider store={mockedStore}>
				<BrowserRouter>
					<Header state={mockedStore} />
				</BrowserRouter>
			</Provider>
		);

		const name = screen.getByText(mockState.user.name);

		expect(name).toBeInTheDocument();
	});
});
