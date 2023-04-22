import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { Service } from '../../API/services';

function Registration() {
	const history = useNavigate();
	const [newUser, setNewUser] = useState({
		name: '',
		email: '',
		password: '',
	});
	const setRegistration = async (e) => {
		e.preventDefault();
		const result = await Service.setUser(newUser);

		if (result.successful) {
			history('/login');
		} else {
			console.error(result.errors[0]);
		}
	};

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setNewUser({ ...newUser, [name]: value });
	};

	return (
		<div className='border-2 h-[100vh] flex flex-col justify-center'>
			<h1 className='text-center text-xl font-bold'>Registration</h1>
			<form
				className='w-[300px] mx-auto text-center'
				onSubmit={setRegistration}
			>
				<fieldset className='text-start'>
					<label className='cursor-pointer' htmlFor='name'>
						Name
					</label>
					<Input
						type='text'
						id='name'
						name='name'
						placeholder='Enter name'
						value={newUser.name}
						onChange={handleChange}
						required
					/>
					<label className='cursor-pointer' htmlFor='name'>
						Email
					</label>
					<Input
						type='email'
						id='email'
						name='email'
						placeholder='Enter email'
						value={newUser.email}
						onChange={handleChange}
						required
					/>
					<label className='cursor-pointer' htmlFor='name'>
						Password
					</label>
					<Input
						type='password'
						id='password'
						name='password'
						placeholder='Enter password'
						value={newUser.password}
						onChange={handleChange}
						required
					/>
				</fieldset>
				<Button styles='mt-3 mb-5'>Registration</Button>
				<p>
					If you have an account you can{' '}
					<Link to='/login' className='text-blue-600'>
						Login
					</Link>
				</p>
			</form>
		</div>
	);
}

export default Registration;
