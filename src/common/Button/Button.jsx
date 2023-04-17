import React from 'react';

const Button = ({ children, ...props }) => {
	const style =
		'border border-purple-600 bg-white py-1 px-5 cursor-pointer hover:bg-slate-500 transition-colors';

	return (
		<button className={style + ' ' + props.styles} {...props}>
			{children}
		</button>
	);
};

export default Button;
