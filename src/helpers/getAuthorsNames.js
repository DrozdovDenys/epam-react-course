import { maxStringLength } from '../constans';

export const getAuthorsNames = (arrOfID, arrOfAuthors) => {
	const arrOfNames = arrOfID.map(
		(id) => arrOfAuthors.find((a) => a.id === id)?.name
	);
	if (arrOfNames.join(', ').length > maxStringLength) {
		return arrOfNames.join(', ').slice(0, maxStringLength - 3) + '...';
	} else {
		return arrOfNames.join(', ');
	}
};
