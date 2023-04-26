import { createSlice } from '@reduxjs/toolkit';
import { getUserAC, getUserRoleAC } from './actionCreator';

const initialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
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
		builder
			.addCase(getUserAC.pending, (state, action) => {})
			.addCase(getUserAC.fulfilled, (state, action) => {
				state.isAuth = action.payload.successful;
				state.name = action.payload.user.name;
				state.email = action.payload.user.email;
				state.token = action.payload.result;
			})
			.addCase(getUserAC.rejected, (state, action) => {})
			.addCase(getUserRoleAC.pending, (state, action) => {})
			.addCase(getUserRoleAC.fulfilled, (state, action) => {
				state.role = action.payload;
			})
			.addCase(getUserRoleAC.rejected, (state, action) => {});
	},
});

export default userSlice.reducer;
export const { logOut } = userSlice.actions;
