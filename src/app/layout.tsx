import type { Metadata } from "next";

import localFont from "next/font/local";

import "./styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";

const minecraft = localFont({ src: "../../public/fonts/Minecraftia-Regular.ttf" });

export const metadata: Metadata = {
	title: "Sebastian Calo",
	description: "My little corner of the internet",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}