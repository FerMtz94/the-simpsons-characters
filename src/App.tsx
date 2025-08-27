import { Box, Typography } from "@mui/material";
import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getCharacters } from "./api/characters";

function App() {
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
		console.log(characterData.results);
	}, [characterData, isLoading]);

	return (
		<main>
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
			<Box></Box>
		</main>
	);
}

export default App;
