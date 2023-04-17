import React from 'react';

const Textarea = ({ ...props }) => {
	return <textarea className='border p-1 min-h-[60px]' {...props}></textarea>;
};

export default Textarea;
