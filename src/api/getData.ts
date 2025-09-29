export const getData = async ({
	url,
	fetchErrorMessage = "Fetching error",
	tryCatchError = "Couldn't retrieve data.",
}: {
	url: string;
	fetchErrorMessage: string;
	tryCatchError: string;
}) => {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(fetchErrorMessage);
		}
		return await response.json();
	} catch (error) {
		console.error(tryCatchError, error);
	}
};
