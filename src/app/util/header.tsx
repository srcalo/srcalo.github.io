import TextLink from "./link";

export default function Header() {
	return (
		<header className={"header"}>
			<div className={"headerWrapper"}>
				<div className={"authorInfo"}>
					<div className={"title"}>Sebastian C.</div>
					<div className={"subtitle"}>He/Him</div>
				</div>
				<nav className={"navbar"}>
					<TextLink href="/">Home</TextLink>
					<TextLink href="/">Gallery</TextLink>
				</nav>
			</div>
		</header>
	);
}
