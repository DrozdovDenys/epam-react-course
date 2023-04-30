import React from 'react';
import Button from '../../common/Button/Button';
import { BTN_LOGOUT_TEXT } from '../../constans';
import Logo from './compnents/Logo/Logo';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../store/selectors';
import { logoutAC } from '../../store/user/actionCreator';

function Header() {
	const history = useNavigate();
	const { token } = useSelector(getUser);
	const name = localStorage.getItem('user');
	const dispatch = useDispatch();

	const logout = () => {
		dispatch(logoutAC(token));
		history('/login');
	};
	return (
		<div className='flex justify-between items-center py-6 px-8 mb-12 border-solid border-2 shadow-md'>
			<Logo />
			{token && (
				<div>
					<span className='mr-5'>
						<b>{name}</b>
					</span>
					<Button onClick={logout}>{BTN_LOGOUT_TEXT}</Button>
				</div>
			)}
		</div>
	);
}

export default Header;
