import h from "../styles/header.module.scss";
import TextLink from "./link";

export default function Header() {
	return (
		<header className={h.header}>
			<div className={h.headerWrapper}>
				<div className={h.authorInfo}>
					<div className={h.title}>Sebastian C.</div>
					<div className={h.subtitle}>he/him</div>
				</div>
				<nav className={h.navbar}>
					<TextLink href="/">Home</TextLink>
					<TextLink href="/">Gallery</TextLink>
				</nav>
			</div>
		</header>
	);
}
