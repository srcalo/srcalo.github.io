import TextLink from "./link";
import Navbar from "./navbar";

export default function Header() {
	return (
		<header className={"header"}>
			<div className={"headerWrapper"}>
				<TextLink href="/" className="authorInfo">
					<div className={"title"}>Sebastian C.</div>
					<div className={"subtitle"}>He/Him</div>
				</TextLink>
				<Navbar />
			</div>
		</header>
	);
}
