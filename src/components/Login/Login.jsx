import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { Service } from '../../API/services';

function Login() {
	const history = useNavigate();
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const setLogin = async (e) => {
		e.preventDefault();
		const result = await Service.getUser(user);

		if (result.successful) {
			history('/courses');
		} else {
			console.error(result.errors[0]);
		}
	};

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setUser({ ...user, [name]: value });
	};

	return (
		<div className='border-2 h-[100vh] flex flex-col justify-center'>
			<h1 className='text-center text-xl font-bold'>Login</h1>
			<form
				className='w-[300px] mx-auto text-center flex flex-col items-center'
				onSubmit={setLogin}
			>
				<fieldset className='text-start'>
					<label className='cursor-pointer' htmlFor='name'>
						Email
					</label>
					<Input
						type='email'
						name='email'
						id='loginEmail'
						value={user.email}
						placeholder='Enter email'
						onChange={handleChange}
						required
					/>
					<label className='cursor-pointer' htmlFor='name'>
						Password
					</label>
					<Input
						name='password'
						type='password'
						id='loginPassword'
						value={user.password}
						placeholder='Enter password'
						onChange={handleChange}
						required
					/>
				</fieldset>
				<Button styles='mt-3 mb-5 px-10'>Login</Button>
				<p>
					If you not have an account you can{' '}
					<Link to='/registration' className='text-blue-600'>
						Registration
					</Link>
				</p>
			</form>
		</div>
	);
}

export default Login;
