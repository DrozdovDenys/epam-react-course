import React from 'react';

const Input = ({ ...props }) => {
	return (
		<input
			className='border p-1 border-orange-400 focus-visible:outline-none w-[100%] mb-2'
			{...props}
		/>
	);
};

export default Input;
