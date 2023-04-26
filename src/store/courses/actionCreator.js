import { createAsyncThunk } from '@reduxjs/toolkit';
import { Service } from '../../API/services';

export const getCoursesAC = createAsyncThunk(
	'getCoursesAC',
	async (_, { rejectWithValue }) => {
		try {
			const courses = await Service.getCourses();
			return courses;
		} catch (e) {
			return rejectWithValue(e.message);
		}
	}
);
