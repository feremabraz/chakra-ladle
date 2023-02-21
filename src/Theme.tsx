import { theme as proTheme } from "@chakra-ui/pro-theme";
import { extendTheme, theme as baseTheme } from "@chakra-ui/react";

export const theme = extendTheme(proTheme, {
  colors: {
    ...baseTheme.colors,
    brand: {
      50: "#f8f7f4",
      100: "#f4f2ec",
      200: "#dfd9c9",
      300: "#cbc0a6",
      400: "#b5a282",
      500: "#a68d69",
      600: "#997d5d",
      700: "#7f664f",
      800: "#685344",
      900: "#554539",
    },
  },
  fonts: {
    heading: `'Lexend', sans-serif`,
    body: `'Lexend', sans-serif`,
  },
});
