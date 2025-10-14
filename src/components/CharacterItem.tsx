import MessageIcon from "@mui/icons-material/Message";
import { Box, Typography } from "@mui/material";
import type React from "react";
import { useEffect } from "react";
import type { Character } from "../types/character";

interface CharacterItemProps {
	character: Character;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setPhrase: React.Dispatch<React.SetStateAction<string>>;
}

export const CharacterItem: React.FC<CharacterItemProps> = ({
	character,
	setOpen,
	setPhrase,
}) => {
	useEffect(() => {
		if (!character) return;
	}, [character]);

	const handlePhraseClick = () => {
		setPhrase(
			character.phrases?.length > 0
				? character.phrases[
						Math.floor(Math.random() * character.phrases.length)
					]
				: "No phrases available.",
		);
		setOpen(true);
	};

	return (
		<Box className="character-item">
			<Box className="character-portrait-dialog">
				<img
					src={`https://cdn.thesimpsonsapi.com/200${character.portrait_path}`}
					alt={`${character.name} portrait`}
					className="character-image"
				/>
				{character.phrases?.length > 0 && (
					<MessageIcon onClick={handlePhraseClick} fontSize={"large"} />
				)}
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
