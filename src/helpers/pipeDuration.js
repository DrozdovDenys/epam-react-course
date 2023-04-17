export const pipeDuration = (minutes) => {
	const hours =
		Math.floor(minutes / 60) < 10
			? '0' + Math.floor(minutes / 60)
			: Math.floor(minutes / 60);
	const remainingMinutes =
		minutes % 60 < 10 ? '0' + (minutes % 60) : minutes % 60;
	return `${hours}:${remainingMinutes}`;
};
