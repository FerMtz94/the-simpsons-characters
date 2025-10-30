import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { getCharacters } from "../api/characters";
import type { Character } from "../types/character";
import { PageContext } from "../contexts/PageContext";

export const useCharacters = () => {
	const [characters, setCharacters] = useState<Character[]>([]);
	const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);
	const { page } = useContext(PageContext);

	const { data: characterData, isLoading } = useQuery({
		queryKey: ["characters", page],
		queryFn: () => getCharacters(page.toString()),
	});

	useEffect(() => {
		if (!characterData) return;
		setCharacters(characterData.results);
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [characterData]);

	useEffect(() => {
		setFilteredCharacters(characters);
	}, [characters]);

	return {
		characters,
		filteredCharacters,
		setFilteredCharacters,
		page,
		isLoading,
	};
};
