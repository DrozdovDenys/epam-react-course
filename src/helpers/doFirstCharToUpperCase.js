export const doFirstCharToUpperCase = (str) => {
	str.slice(0, 1).toUpperCase();
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
