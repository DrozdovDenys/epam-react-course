import React, { useContext } from 'react';
import Input from '../../../../common/Input/Input';
import { INPUT_ENTER_DURATION_TEXT } from '../../../../constans';
import { pipeDuration } from '../../../../helpers/pipeDuration';
import { CreateCourseContex } from '../../CreateCourse';

const Duration = () => {
	const { handleChange, duration } = useContext(CreateCourseContex);
	return (
		<div className='w-[50%]'>
			<h2 className='text-center'>Duration</h2>
			<div className='flex flex-col items-start gap-1'>
				<label htmlFor='duration'>Duration</label>
				<Input
					name='duration'
					type={'number'}
					min={1}
					placeholder={INPUT_ENTER_DURATION_TEXT}
					onChange={handleChange}
					id={'duration'}
					value={duration}
				/>
				<div>
					<h3>
						Duration:{' '}
						<span className='font-bold text-2xl'>{pipeDuration(duration)}</span>{' '}
						hours
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Duration;
