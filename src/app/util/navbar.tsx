"use client";

import { usePathname } from "next/navigation";

import TextLink from "./link";

export default function Navbar() {
	const pathname = usePathname();

	return (
		<nav className={"navbar"}>
			<TextLink href="/" className={`${pathname === "/" ? "active" : ""}`}>
				Home
			</TextLink>
			<TextLink href="/gallery" className={`${pathname === "/gallery" ? "active" : ""}`}>
				Gallery
			</TextLink>
		</nav>
	);
}
