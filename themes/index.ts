import { extendTheme, theme as baseTheme } from "@chakra-ui/react";

const colors = {
  brand: baseTheme.colors.purple,
};

const config = {
  initialColorMode: 'system',
}

export const theme = extendTheme({ colors, config });
