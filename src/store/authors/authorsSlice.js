import { createSlice } from '@reduxjs/toolkit';
import { getAuthorsAC } from './actionCreators';

const authorsSlice = createSlice({
	name: 'authorsSlice',
	initialState: [],
	reducers: {
		addAuthors(state, action) {
			state.push(action.payload);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAuthorsAC.pending, (state, action) => {})
			.addCase(getAuthorsAC.fulfilled, (state, action) => {
				state.push(...action.payload);
			})
			.addCase(getAuthorsAC.rejected, (state, action) => {});
	},
});

export const { addAuthors } = authorsSlice.actions;
export default authorsSlice.reducer;
