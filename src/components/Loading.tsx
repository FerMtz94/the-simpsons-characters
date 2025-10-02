import { Box, CircularProgress } from "@mui/material";

export const Loading = () => {
	return (
		<Box className="loading-container">
			<CircularProgress color="primary" />
		</Box>
	);
};
