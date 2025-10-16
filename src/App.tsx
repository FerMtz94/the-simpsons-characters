import { Box, Modal, Typography } from "@mui/material";
import "./styles/App.css";
import { Analytics } from "@vercel/analytics/react";
import { useState } from "react";
import { CharacterItem } from "./components/CharacterItem";
import { CharacterList } from "./components/CharacterList";
import { FilterCharacters } from "./components/FilterCharacters";
import { Loading } from "./components/Loading";
import { NoCharactersFound } from "./components/NoCharactersFound";
import { PageSelection } from "./components/PageSelection";
import { useCharacters } from "./hooks/useCharacters";

function App() {
	const [open, setOpen] = useState(false);
	const [phrase, setPhrase] = useState<string>("");
	const {
		characters,
		filteredCharacters,
		setFilteredCharacters,
		page,
		setPage,
		isLoading,
	} = useCharacters();

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
								<CharacterItem
									key={character.id}
									character={character}
									setOpen={setOpen}
									setPhrase={setPhrase}
								/>
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
			<Modal
				open={open}
				onClose={() => setOpen(false)}
				className="modal-overlay"
			>
				<Box className="modal-box">
					<Typography variant="body1" className="modal-text">
						{phrase}
					</Typography>
				</Box>
			</Modal>
			<Analytics />
		</>
	);
}

export default App;
