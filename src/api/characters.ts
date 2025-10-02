import { getData } from "./getData";

export const getCharacters = async (page?: string) => {
	if (page === "1") page = undefined;
	return await getData({
		url: `https://thesimpsonsapi.com/api/characters${page ? `?page=${page}` : ""}`,
		fetchErrorMessage: "Couldn't fetch characters",
		tryCatchError: "Error fetching characters:",
	});
};
