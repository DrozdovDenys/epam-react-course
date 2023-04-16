import React from 'react';
import logo from '../../../../images/epam_logo.png';

const Logo = () => {
	return (
		<div className='bg-[#504949] relative'>
			<a href='/'>
				<img
					className='absolute left-[5%] top-[50%] translate-y-[-50%] rounded-full py-3 bg-[#bcd7ff]'
					src={logo}
					alt='logo'
					width={50}
				/>
				<span className='inline-block font-bold py-[5px] pr-3 pl-16'>
					COURSES
				</span>
			</a>
		</div>
	);
};

export default Logo;
