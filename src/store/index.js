import { combineReducers, configureStore } from '@reduxjs/toolkit';
import coursesSlice from './courses/coursesSlice';
import userSlice from './user/userSlice';
import authorsSlice from './authors/authorsSlice';

const rootReducer = combineReducers({
	user: userSlice,
	courses: coursesSlice,
	authors: authorsSlice,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
