import { extendTheme, theme as baseTheme } from "@chakra-ui/react";

const colors = {
  main: baseTheme.colors.purple
};

export const theme = extendTheme({ colors });
