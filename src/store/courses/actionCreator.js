import { createAsyncThunk } from '@reduxjs/toolkit';
import { Service } from '../../API/services';

export const fetchCourses = createAsyncThunk(
	'fetchCourses',
	async (_, { rejectWithValue }) => {
		try {
			const courses = await Service.getCourses();
			return courses;
		} catch (e) {
			return rejectWithValue(e.message);
		}
	}
);
export const addCourse = createAsyncThunk(
	'addCourse',
	async ({ course, token }, { rejectWithValue }) => {
		try {
			const response = await Service.addCourse(course, token);
			return response.result;
		} catch (e) {
			return rejectWithValue(e.message);
		}
	}
);
export const deleteCourse = createAsyncThunk(
	'deleteCourse',
	async ({ id, token }, { rejectWithValue }) => {
		try {
			const courses = await Service.deleteCourse(id, token);
			return courses;
		} catch (e) {
			return rejectWithValue(e.message);
		}
	}
);
export const updateCourse = createAsyncThunk(
	'udateCourse',
	async ({ id, token, course }, { rejectWithValue }) => {
		try {
			const response = await Service.updateCourse(id, token, course);
			return response;
		} catch (e) {
			return rejectWithValue(e.message);
		}
	}
);
