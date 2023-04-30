import { createSlice } from '@reduxjs/toolkit';
import {
	addCourseAC,
	deleteCourseAC,
	getCoursesAC,
	updateCourseAC,
} from './actionCreator';

const coursesSlice = createSlice({
	name: 'coursesSlice',
	initialState: [],
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getCoursesAC.fulfilled, (state, action) => {
			return (state = action.payload);
		});
		builder.addCase(addCourseAC.fulfilled, (state, action) => {
			state.push(action.payload);
		});
		builder.addCase(deleteCourseAC.fulfilled, (state, action) => {
			return state.filter((course) => course.id !== action.payload);
		});
		builder.addCase(updateCourseAC.fulfilled, (state, action) => {
			console.log(action.payload);
			const index = state.findIndex(({ id }) => id === action.payload.id);

			state[index] = action.payload;
		});
	},
});

export default coursesSlice.reducer;
export const { deleteCourse, addCourse } = coursesSlice.actions;
