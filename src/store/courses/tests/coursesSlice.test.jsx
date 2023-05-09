import { coursesSlice } from '../coursesSlice';
import { addCourse, fetchCourses } from '../actionCreator';
describe('Courses Slice', () => {
	it('should return the initial state', () => {
		expect(coursesSlice.reducer(undefined, { type: undefined })).toEqual([]);
	});
	it('should handle GET_COURSES and returns new state', () => {
		const courses = [{ id: '1', title: 'title1' }];

		expect(
			coursesSlice.reducer(undefined, {
				type: fetchCourses.fulfilled,
				payload: courses,
			})
		).toEqual(courses);
	});
	it('should handle ADD_COURSE and returns new state', () => {
		const initState = [{ id: '1', title: 'title1' }];
		const course = { id: '2', title: 'title2' };

		expect(
			coursesSlice.reducer(initState, {
				type: addCourse.fulfilled,
				payload: course,
			})
		).toEqual([...initState, course]);
	});
});
