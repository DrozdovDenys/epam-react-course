import { createAsyncThunk } from '@reduxjs/toolkit';
import { Service } from '../../API/services';

export const getUserAC = createAsyncThunk(
	'getUserAC',
	async (user, { rejectWithValue }) => {
		try {
			const userInfo = await Service.getUser(user);
			return userInfo;
		} catch (e) {
			return rejectWithValue(e.message);
		}
	}
);

export const getUserRoleAC = createAsyncThunk(
	'getUserRoleAC',
	async (token, { rejectWithValue }) => {
		try {
			const userInfo = await Service.getUserRole(token);
			return userInfo;
		} catch (e) {
			return rejectWithValue(e.message);
		}
	}
);
