import { createSlice } from '@reduxjs/toolkit';
import {
	addCourse,
	deleteCourse,
	fetchCourses,
	updateCourse,
} from './actionCreator';

export const coursesSlice = createSlice({
	name: 'coursesSlice',
	initialState: [],
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchCourses.fulfilled, (state, action) => {
			return (state = action.payload);
		});
		builder.addCase(addCourse.fulfilled, (state, action) => {
			state.push(action.payload);
		});
		builder.addCase(deleteCourse.fulfilled, (state, action) => {
			return state.filter((course) => course.id !== action.payload);
		});
		builder.addCase(updateCourse.fulfilled, (state, action) => {
			console.log(action.payload);
			const index = state.findIndex(({ id }) => id === action.payload.id);

			state[index] = action.payload;
		});
	},
});

export default coursesSlice.reducer;
