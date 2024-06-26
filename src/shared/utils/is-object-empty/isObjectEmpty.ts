export const isObjectEmpty = (obj: Record<any, any>) => {
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			return false;
		}
	}
	return true;
};
