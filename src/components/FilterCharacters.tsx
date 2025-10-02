import { Box, Input } from "@mui/material";
import type React from "react";
import { useState } from "react";
import type { Character } from "../types/character";

interface SearchCharacterProps {
	characters: Character[];
	setFilteredCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
}

export const FilterCharacters: React.FC<SearchCharacterProps> = ({
	characters,
	setFilteredCharacters,
}) => {
	const [inputText, setInputText] = useState("");

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const text = e.target.value;
		setInputText(text);
		const filtered = characters.filter((character) =>
			character.name.toLowerCase().includes(text.toLowerCase()),
		);
		setFilteredCharacters(filtered);
	};

	return (
		<Box className="filter-character-container">
			<Input
				placeholder="Filter..."
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e)}
				value={inputText}
			/>
		</Box>
	);
};
