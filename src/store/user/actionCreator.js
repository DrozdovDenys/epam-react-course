import { createAsyncThunk } from '@reduxjs/toolkit';
import { Service } from '../../API/services';

export const getUser = createAsyncThunk(
	'getUser',
	async (user, { rejectWithValue }) => {
		try {
			const userInfo = await Service.getUser(user);
			return userInfo;
		} catch (e) {
			return rejectWithValue(e.message);
		}
	}
);

export const getUserRole = createAsyncThunk(
	'getUserRole',
	async (token, { rejectWithValue }) => {
		try {
			const userRole = await Service.getUserRole(token);
			return userRole;
		} catch (e) {
			return rejectWithValue(e.message);
		}
	}
);

export const logout = createAsyncThunk('logout', async (token) => {
	await Service.logout(token);
});
