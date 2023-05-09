export class Service {
	static async setUser(newUser) {
		const response = await fetch('http://localhost:4000/register', {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const result = await response.json();
		return result;
	}
	static async getUser(user) {
		const response = await fetch('http://localhost:4000/login', {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const result = await response.json();
		localStorage.setItem('token', result.result);
		localStorage.setItem('user', result.user.name);
		return result;
	}
	static async getUserRole(token) {
		const response = await fetch('http://localhost:4000/users/me', {
			method: 'GET',
			headers: {
				Authorization: token,
				'Content-Type': 'application/json',
			},
		});
		const result = await response.json();
		const role = await result.result.role;
		return role;
	}
	static async logout(token) {
		await fetch('http://localhost:4000/logout', {
			method: 'DELETE',
			headers: {
				Authorization: token,
			},
		});

		localStorage.removeItem('token');
		localStorage.removeItem('user');
	}

	static async getAuthors() {
		const response = await fetch('http://localhost:4000/authors/all');
		const result = await response.json();
		return result.result;
	}
	static async addAuthor(name, token) {
		const response = await fetch('http://localhost:4000/authors/add', {
			method: 'POST',
			body: JSON.stringify({
				name: name,
			}),
			headers: {
				Authorization: token,
			},
		});

		const result = await response.json();
		return result.result;
	}

	static async getCourses() {
		const response = await fetch('http://localhost:4000/courses/all');
		const result = await response.json();
		return result.result;
	}
	static async addCourse(course, token) {
		const response = await fetch('http://localhost:4000/courses/add', {
			method: 'POST',
			body: JSON.stringify(course),
			headers: {
				Authorization: token,
				'Content-Type': 'application/json',
			},
		});
		const result = await response.json();
		return result;
	}
	static async deleteCourse(id, token) {
		const response = await fetch(`http://localhost:4000/courses/${id}`, {
			method: 'DELETE',
			headers: {
				Authorization: token,
			},
		});
		const result = await response.json();
		if (!result.successful) {
			throw new Error(result.message || 'Failed to delete course.');
		}
		return id;
	}
	static async updateCourse(id, token, course) {
		const response = await fetch(`http://localhost:4000/courses/${id}`, {
			method: 'PUT',
			body: JSON.stringify(course),
			headers: {
				Authorization: token,
				'Content-Type': 'application/json',
			},
		});
		const result = await response.json();
		if (!result.successful) {
			throw new Error(result.message || 'Failed to update course.');
		}
		return result.result;
	}
}
