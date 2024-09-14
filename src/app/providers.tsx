"use client";

import { ChakraProvider, theme } from "@chakra-ui/react";

delete theme.styles.global;
export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ChakraProvider theme={theme} resetCSS={false} disableGlobalStyle={true}>
			{children}
		</ChakraProvider>
	);
}
