import { useColorModeValue, useSafeLayoutEffect } from "@chakra-ui/react";
import { useRef } from "react";

export const useSafeColorModeValue = <TLight = unknown, TDark = unknown>(light: TLight, dark: TDark): TLight | TDark | undefined => {
  const result = useColorModeValue(light, dark);
  const able = useRef(false);
  useSafeLayoutEffect(() => {
    able.current = true;
  });

  return able.current ? result : undefined;
}