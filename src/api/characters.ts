import { getData } from "./getData";

export const getCharacters = async () => {
	return await getData({
		url: "https://thesimpsonsapi.com/api/characters",
		fetchErrorMessage: "Couldn't fetch characters",
		tryCatchError: "Error fetching characters:",
	});
};
