import TextLink from "./link";

export default function Header() {
	return (
		<header className={"header"}>
			<div className={"headerWrapper"}>
				<TextLink href="/" className="authorInfo">
					<div className={"title"}>Sebastian C.</div>
					<div className={"subtitle"}>He/Him</div>
				</TextLink>

				<nav className={"navbar"}>
					<TextLink href="/">Home</TextLink>
					<TextLink href="/gallery">Gallery</TextLink>
				</nav>
			</div>
		</header>
	);
}
