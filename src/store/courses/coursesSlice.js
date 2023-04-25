import { createSlice } from '@reduxjs/toolkit';
import { getCoursesAC } from './actionCreator';

const coursesSlice = createSlice({
	name: 'coursesSlice',
	initialState: [],
	reducers: {
		deleteCourse(state, action) {
			return (state = state.filter((c) => c.id !== action.payload));
		},
		addCourse(state, action) {
			state.push(action.payload);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getCoursesAC.pending, (state, action) => {})
			.addCase(getCoursesAC.fulfilled, (state, action) => {
				state.push(...action.payload);
			})
			.addCase(getCoursesAC.rejected, (state, action) => {});
	},
});

export default coursesSlice.reducer;
export const { deleteCourse, addCourse } = coursesSlice.actions;
