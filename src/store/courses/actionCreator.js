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
export const addCourseAC = createAsyncThunk(
	'addCourseAC',
	async ({ course, token }, { rejectWithValue }) => {
		try {
			const response = await Service.addCourse(course, token);
			return response.result;
		} catch (e) {
			return rejectWithValue(e.message);
		}
	}
);
export const deleteCourseAC = createAsyncThunk(
	'deleteCourseAC',
	async ({ id, token }, { rejectWithValue }) => {
		try {
			const courses = await Service.deleteCourse(id, token);
			return courses;
		} catch (e) {
			return rejectWithValue(e.message);
		}
	}
);
export const updateCourseAC = createAsyncThunk(
	'udateCourseAC',
	async ({ id, token, course }, { rejectWithValue }) => {
		try {
			const response = await Service.updateCourse(id, token, course);
			return response;
		} catch (e) {
			return rejectWithValue(e.message);
		}
	}
);
