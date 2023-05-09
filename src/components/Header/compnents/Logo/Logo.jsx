import React from 'react';
import logo from '../../../../images/epam_logo.png';
import { Link } from 'react-router-dom';

function Logo() {
	return (
		<div className='bg-[#504949] relative'>
			<Link to='/courses'>
				<img
					className='absolute left-[5%] top-[50%] translate-y-[-50%] rounded-full py-3 bg-[#bcd7ff]'
					src={logo}
					alt='logo'
					width={50}
				/>
				<span className='inline-block font-bold py-[5px] pr-3 pl-16'>
					COURSES
				</span>
			</Link>
		</div>
	);
}

export default Logo;
