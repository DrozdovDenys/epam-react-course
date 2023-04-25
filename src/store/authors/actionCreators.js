import { createAsyncThunk } from '@reduxjs/toolkit';
import { Service } from '../../API/services';

export const getAuthorsAC = createAsyncThunk(
	'getAuthorsAC',
	async (_, { rejectWithValue }) => {
		try {
			const authors = await Service.getAuthors();
			return authors;
		} catch (e) {
			return rejectWithValue(e.message);
		}
	}
);
