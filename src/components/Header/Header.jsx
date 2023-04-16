import React from 'react';
import Button from '../../common/Button/Button';
import { BTN_LOGOUT_TEXT } from '../../constans';
import Logo from './compnents/Logo/Logo';

const Header = () => {
	return (
		<div className='flex justify-between items-center py-6 px-8 mb-12 border-solid border-2 shadow-md'>
			<Logo />
			<div>
				<span className='mr-5'>
					<b>User</b>
				</span>
				<Button>{BTN_LOGOUT_TEXT}</Button>
			</div>
		</div>
	);
};

export default Header;
