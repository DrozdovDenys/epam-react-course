import { createSlice } from '@reduxjs/toolkit';
import { addAuthorAC, getAuthorsAC } from './actionCreators';

const authorsSlice = createSlice({
	name: 'authorsSlice',
	initialState: [],
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAuthorsAC.fulfilled, (state, action) => {
			return (state = action.payload);
		});
		builder.addCase(addAuthorAC.fulfilled, (state, action) => {
			state.push(action.payload.result);
		});
	},
});

export default authorsSlice.reducer;
