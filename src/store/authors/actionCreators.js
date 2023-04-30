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

export const addAuthorAC = createAsyncThunk(
	'addAuthorAC',
	async ({ name, token }, { rejectWithValue }) => {
		try {
			const response = await fetch('http://localhost:4000/authors/add', {
				method: 'POST',
				body: JSON.stringify({
					name: name,
				}),
				headers: {
					Authorization: token,
					'Content-Type': 'application/json',
				},
			});

			const result = await response.json();
			return result;
		} catch (e) {
			return rejectWithValue(e.message);
		}
	}
);
