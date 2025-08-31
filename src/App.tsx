import { Box, List, ListItem, Typography } from "@mui/material";
import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getCharacters } from "./api/characters";
import type { Character } from "./types/character";

function App() {
	const [characters, setCharacters] = useState<Character[]>([]);

	const { data: characterData, isLoading } = useQuery({
		queryKey: ["characters"],
		queryFn: getCharacters,
	});

	useEffect(() => {
		if (isLoading) {
			console.log("Loading data...");
		}
		if (!characterData) {
			console.error("No character data available");
			return;
		}
		setCharacters(characterData.results);
	}, [characterData, isLoading]);

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
			<Box>
				<List>
					{characters.map(character => (
						<ListItem key={character.id}>
							<Typography color={"primary"}>
								{character.name}
							</Typography>
						</ListItem>
					))}
				</List>
			</Box>
		</main>
	);
}

export default App;
