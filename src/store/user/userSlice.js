import { createSlice } from '@reduxjs/toolkit';
import { getUser, getUserRole, logout } from './actionCreator';

const initialState = {
	isAuth: false,
	name: localStorage.getItem('user') || '',
	email: '',
	token: localStorage.getItem('token') || '',
	role: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getUser.fulfilled, (state, action) => {
			state.isAuth = action.payload.successful;
			state.name = action.payload.user.name;
			state.email = action.payload.user.email;
			state.token = action.payload.result;
		});
		builder.addCase(getUserRole.fulfilled, (state, action) => {
			state.role = action.payload;
		});
		builder.addCase(logout.fulfilled, (state, action) => {
			console.log(action.payload);
			state.isAuth = false;
			state.email = '';
			state.name = '';
			state.token = '';
			state.role = '';
		});
	},
});

export default userSlice.reducer;
