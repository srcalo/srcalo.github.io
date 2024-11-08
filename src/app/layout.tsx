import type { Metadata } from "next";

import "./styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Header from "./util/header";
import Footer from "./util/footer";

export const metadata: Metadata = {
	title: "Sebastian Calo",
	description: "Sebastian's little corner of the internet",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body>
				<Header />
				<main>
					<div className="wrapper">{children}</div>
				</main>
				<Footer />
			</body>
		</html>
	);
}
