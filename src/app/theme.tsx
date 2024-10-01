"use client";

import { background, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface Props {}

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const theme = extendTheme({
    styles: {
      global: {
        "html, body": {
          width: "100vw",
          height: "100vh",
          backgroundColor: "yellow.100",
        },
      },
    },
  });

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
