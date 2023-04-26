export const getRandomValue = (val1, val2) => {
	return Math.floor(Math.random() * 2) === 0 ? val1 : val2;
};
