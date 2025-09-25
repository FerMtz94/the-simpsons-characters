import { Box, Typography, useTheme } from "@mui/material";
import type React from "react";
import type { Character } from "../types/character";

interface CharacterItemProps {
	character: Character;
}

export const CharacterItem: React.FC<CharacterItemProps> = ({ character }) => {
	const theme = useTheme();

	return (
		<Box
			className="character-item"
			sx={{ backgroundColor: theme.palette.secondary.main }}
		>
			<Typography variant="h6">{character.name}</Typography>
			<Typography variant="body1">Age: {character.age}</Typography>
			<Typography variant="body1">Birthdate: {character.birthdate}</Typography>
			<Typography variant="body1">Gender: {character.gender}</Typography>
			<Typography variant="body1">
				Occupation: {character.occupation}
			</Typography>
			<Typography variant="body1">Status: {character.status}</Typography>
		</Box>
	);
};
