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

	static async getCourses() {
		const response = await fetch('http://localhost:4000/courses/all');
		const result = await response.json();
		return result.result;
	}

	static async getAuthors() {
		const response = await fetch('http://localhost:4000/authors/all');
		const result = await response.json();
		return result.result;
	}

	static async getUserRole(token) {
		const response = await fetch('http://localhost:4000/users/me', {
			method: 'GET',
			headers: {
				Authorization: token,
			},
		});
		const result = await response.json();
		const role = await result.result.role;
		return role;
	}
}
