import { createSlice } from '@reduxjs/toolkit';
import { getUserAC, getUserRoleAC, logoutAC } from './actionCreator';

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
	reducers: {
		logOut(state, action) {
			state.isAuth = action.payload;
			localStorage.removeItem('token');
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getUserAC.fulfilled, (state, action) => {
			state.isAuth = action.payload.successful;
			state.name = action.payload.user.name;
			state.email = action.payload.user.email;
			state.token = action.payload.result;
		});
		builder.addCase(getUserRoleAC.fulfilled, (state, action) => {
			state.role = action.payload;
		});
		builder.addCase(logoutAC.fulfilled, (state, action) => {
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
export const { logOut } = userSlice.actions;
