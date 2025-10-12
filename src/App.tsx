import { Box, Typography } from "@mui/material";
import "./styles/App.css";
import { useQuery } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";
import { getCharacters } from "./api/characters";
import { CharacterItem } from "./components/CharacterItem";
import { CharacterList } from "./components/CharacterList";
import { FilterCharacters } from "./components/FilterCharacters";
import { Loading } from "./components/Loading";
import { NoCharactersFound } from "./components/NoCharactersFound";
import { PageSelection } from "./components/PageSelection";
import type { Character } from "./types/character";

function App() {
	const [characters, setCharacters] = useState<Character[]>([]);
	const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);
	const [page, setPage] = useState(1);

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

	return (
		<>
			<Box className="app-wrapper">
				<Box component="header" className="app-title">
					<Typography variant="h4" color="primary">
						The Simpsons Characters
					</Typography>
				</Box>
				<Box component="main" className="main-content">
					{isLoading && <Loading />}
					{!isLoading && (
						<FilterCharacters
							characters={characters}
							setFilteredCharacters={setFilteredCharacters}
						/>
					)}
					{!isLoading && filteredCharacters.length === 0 && (
						<NoCharactersFound />
					)}
					<CharacterList>
						{!isLoading &&
							filteredCharacters.length > 0 &&
							filteredCharacters.map((character) => (
								<CharacterItem key={character.id} character={character} />
							))}
					</CharacterList>
				</Box>
				<Box component="footer" className="footer-wrapper">
					<Typography variant="body2" className="footer-text">
						Developed by Fernando Martínez &copy; {new Date().getFullYear()}
					</Typography>
				</Box>
			</Box>
			{!isLoading && filteredCharacters.length > 0 && (
				<PageSelection page={page} setPage={setPage} />
			)}
			<Analytics />
		</>
	);
}

export default App;
