import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";
import { useContext } from "react";
import { PageContext } from "../contexts/PageContext";

export const PageSelection: React.FC = () => {
	const navigate = useNavigate();
	const { page, updatePage } = useContext(PageContext);

	const handlePageChange = (option: "next" | "prev") => {
		return () => {
			navigate({
				to: '/characters',
				search: { page: 
					option === "next" ?
					 page === 60 ? 
					 	1 : 
						page + 1 : 
					page === 1 ? 
						60 : 
						page-1  
					},
			});
			
			if (option === "next") {
				if (page === 60) {
					updatePage(1); // Wrap around to the first page
					return;
				}
				updatePage(page + 1);
				return;
			}
			if (option === "prev") {
				if (page === 1) {
					updatePage(60); // Wrap around to the last page
					return;
				}
				updatePage(page - 1);
				return;
			}
		}
	};

	return (
		<Box
			className="page-selection-wrapper"
			sx={{
				backdropFilter: "blur(30px)",
			}}
		>
			<Box className="page-selection-container">
				<Button
					variant="contained"
					color="primary"
					onClick={ handlePageChange("prev") }
				>
					<ArrowBackIcon fontSize="medium" />
				</Button>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						width: "40px",
					}}
				>
					<Typography variant="body1">{page}</Typography>
				</Box>
				<Button
					variant="contained"
					color="primary"
					onClick={ handlePageChange("next") }
				>
					<ArrowForwardIcon fontSize="medium" />
				</Button>
			</Box>
		</Box>
	);
};
