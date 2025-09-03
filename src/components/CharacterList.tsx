import { Box } from "@mui/material";
import type React from "react";
import type { PropsWithChildren } from "react";

export const CharacterList: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<Box className="character-list-container" component="section">
			{children}
		</Box>
	);
};
