import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Typography } from "@mui/material";

interface PageSelectionProps {
	page: number;
	setPage: (page: number) => void;
}

export const PageSelection: React.FC<PageSelectionProps> = ({
	page,
	setPage,
}) => {
	const handlePageChange = (option: "next" | "prev") => {
		if (option === "next") {
			if (page === 60) {
				setPage(1); // Wrap around to the first page
				return;
			}
			setPage(page + 1);
			return;
		}
		if (option === "prev") {
			if (page === 1) {
				setPage(60); // Wrap around to the last page
				return;
			}
			setPage(page - 1);
			return;
		}
	};

	return (
		<Box className="page-selection-container">
			<Button
				variant="contained"
				color="secondary"
				onClick={() => {
					handlePageChange("prev");
				}}
			>
				<ArrowBackIcon fontSize="medium" />
			</Button>
			<Box sx={{ padding: "8px" }}>
				<Typography variant="body1">{page}</Typography>
			</Box>
			<Button
				variant="contained"
				color="secondary"
				onClick={() => {
					handlePageChange("next");
				}}
			>
				<ArrowForwardIcon fontSize="medium" />
			</Button>
		</Box>
	);
};
