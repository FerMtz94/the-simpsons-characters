import { getData } from "./getData";

export const getCharacter = async (id: number) => {
	return await getData({
		url: `https://thesimpsonsapi.com/api/characters/${id}`,
		fetchErrorMessage: "Couldn't retrieve the character",
		tryCatchError: "Error fetching single character:",
	});
};
