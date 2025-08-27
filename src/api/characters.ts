export const getCharacters = async () => {
	let characters = [];
	try {
		const response = await fetch("https://thesimpsonsapi.com/api/characters");
		if (!response.ok) {
			throw new Error("Couldn't fetch characters");
		}
		const data = await response.json();
		characters = data;
		return characters;
	} catch (error) {
		console.error("Error fetching characters:", error);
	}
};
