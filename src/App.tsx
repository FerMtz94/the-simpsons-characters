import { Typography } from "@mui/material";
import "./styles/App.css";
import { useQuery } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/next";
import { useEffect, useState } from "react";
import { getCharacters } from "./api/characters";
import { CharacterItem } from "./components/CharacterItem";
import { CharacterList } from "./components/CharacterList";
import type { Character } from "./types/character";

function App() {
	const [characters, setCharacters] = useState<Character[]>([]);

	const { data: characterData, isLoading } = useQuery({
		queryKey: ["characters"],
		queryFn: getCharacters,
	});

	useEffect(() => {
		if (!characterData) return;
		setCharacters(characterData.results);
	}, [characterData]);

	return (
		<main>
			<header>
				<Typography
					variant="h4"
					color={"primary"}
					sx={{
						justifyContent: "center",
						display: "flex",
						margin: "2em 2em",
						textWrap: "stable",
						textAlign: "center",
					}}
				>
					The Simpsons Characters
				</Typography>
			</header>
			<CharacterList>
				{isLoading && <p>Loading characters...</p>}
				{!isLoading && characters.length === 0 && <p>No characters found.</p>}
				{!isLoading &&
					characters.length > 0 &&
					characters.map((character) => (
						<CharacterItem key={character.id} character={character} />
					))}
			</CharacterList>
			<Analytics />
		</main>
	);
}

export default App;
