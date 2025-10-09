import { blue, yellow } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	cssVariables: true,
	spacing: 8,
	colorSchemes: {
		dark: {
			palette: {
				primary: {
					main: yellow[700],
				},
				secondary: {
					main: blue[500],
				},
				background: {
					default: blue[900],
				},
			},
		},
		light: {
			palette: {
				primary: {
					main: blue[500],
				},
				secondary: {
					main: yellow[700],
				},
				background: {
					default: blue[100],
				},
			},
		},
	},
});
