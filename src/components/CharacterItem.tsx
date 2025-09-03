import { Box } from "@mui/material";
import type React from "react";
import type { Character } from "../types/character";

interface CharacterItemProps {
	character: Character;
}

export const CharacterItem: React.FC<CharacterItemProps> = ({ character }) => {
	return <Box className="character-item">{character.name}</Box>;
};
