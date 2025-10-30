import MessageIcon from "@mui/icons-material/Message";
import { Box, Typography } from "@mui/material";
import type React from "react";
import { useContext, useEffect } from "react";
import type { Character } from "../types/character";
import { useNavigate, useRouter, useSearch } from "@tanstack/react-router";
import { DetailViewContext } from "../contexts/DetailViewContext";

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
	const { updateCharacterViewOpen } = useContext(DetailViewContext);
	const router = useRouter();

	const navigate = useNavigate();
	const search = useSearch({ from: "/characters" });

	useEffect(() => {
		if (!character) return;
	}, [character]);

	// const handlePhraseClick = () => {
	// 	setPhrase(
	// 		character.phrases?.length > 0
	// 			? character.phrases[
	// 					Math.floor(Math.random() * character.phrases.length)
	// 				]
	// 			: "No phrases available.",
	// 	);
	// 	setOpen(true);
	// };

	const handleCharacterClick = () => {
		navigate({
			from: '/characters',
			to: `/characters/${character.id}?page=${search?.page}`,
			search: { page: search?.page < 1 ? 1 : search?.page },
			replace: true
		});
		updateCharacterViewOpen(true);
		router.history.push(`/characters/${character.id}?page=${search?.page}`);
	};

	return (
		<Box className="character-item" onClick={handleCharacterClick}>
			<Box className="character-portrait-dialog">
				<img
					src={`https://cdn.thesimpsonsapi.com/200${character.portrait_path}`}
					alt={`${character.name} portrait`}
					className="character-image"
				/>
				{/* {character.phrases?.length > 0 && (
					<MessageIcon onClick={handlePhraseClick} fontSize={"large"} />
				)} */}
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
