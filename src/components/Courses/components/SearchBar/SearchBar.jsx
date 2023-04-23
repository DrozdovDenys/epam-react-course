import React, { useState } from 'react';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import {
	BTN_SEARCH_TEXT,
	INPUT_SEARCH_TEXT,
	INPUT_TYPE_SEARCH,
} from '../../../../constans';

const SearchBar = ({ setQuery }) => {
	const [inputValue, setInputValue] = useState('');
	const inputHandler = (e) => {
		setInputValue(e.target.value);
	};
	const btnSearchHandler = () => {
		setQuery(inputValue);
	};

	return (
		<div className='flex gap-3 justify-between w-[60%]'>
			<Input
				type={INPUT_TYPE_SEARCH}
				placeholder={INPUT_SEARCH_TEXT}
				onChange={inputHandler}
				value={inputValue}
			/>
			<Button onClick={btnSearchHandler}>{BTN_SEARCH_TEXT}</Button>
		</div>
	);
};

export default SearchBar;
