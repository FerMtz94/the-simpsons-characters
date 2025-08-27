import { Typography } from "@mui/material";
import "./App.css";

function App() {
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
		</main>
	);
}

export default App;
