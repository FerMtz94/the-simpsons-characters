import { Box, Typography } from "@mui/material";

export const NoCharactersFound = () => {
	return (
		<Box className="no-characters-found-container">
			<Typography variant="h6" color="primary">
				No characters found
			</Typography>
		</Box>
	);
};
