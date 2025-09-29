import { Box, Typography, useTheme } from "@mui/material";
import type React from "react";
import { useEffect } from "react";
import type { Character } from "../types/character";

interface CharacterItemProps {
	character: Character;
}

export const CharacterItem: React.FC<CharacterItemProps> = ({ character }) => {
	const theme = useTheme();

	useEffect(() => {
		if (!character) return;
	}, [character]);

	return (
		<Box
			className="character-item"
			sx={{ backgroundColor: theme.palette.secondary.main }}
		>
			<Box sx={{ display: "flex", justifyContent: "center", padding: "12px" }}>
				<img
					src={`https://cdn.thesimpsonsapi.com/200${character.portrait_path}`}
					alt={`${character.name} portrait`}
					className="character-image"
				/>
			</Box>
			<Typography variant="h6" sx={{ marginBottom: "12px" }}>
				{character.name}
			</Typography>
			{character.age && (
				<Typography variant="body1">Age: {character.age}</Typography>
			)}
			{character.birthdate && (
				<Typography variant="body1">
					Birthdate: {character.birthdate}
				</Typography>
			)}
			<Typography variant="body1">Gender: {character.gender}</Typography>
			<Typography variant="body1">
				Occupation: {character.occupation}
			</Typography>
			<Typography variant="body1">Status: {character.status}</Typography>
		</Box>
	);
};
