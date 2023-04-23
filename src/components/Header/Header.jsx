import React from 'react';
import Button from '../../common/Button/Button';
import { BTN_LOGOUT_TEXT } from '../../constans';
import Logo from './compnents/Logo/Logo';
import { useNavigate } from 'react-router-dom';

function Header() {
	const history = useNavigate();
	const token = localStorage.getItem('token');
	const userName = localStorage.getItem('user');
	const logout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		history('/login');
	};
	return (
		<div className='flex justify-between items-center py-6 px-8 mb-12 border-solid border-2 shadow-md'>
			<Logo />
			{token && (
				<div>
					<span className='mr-5'>
						<b>{userName}</b>
					</span>
					<Button onClick={logout}>{BTN_LOGOUT_TEXT}</Button>
				</div>
			)}
		</div>
	);
}

export default Header;
