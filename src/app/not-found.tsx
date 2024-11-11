import TextLink from "./util/link";

export default function NotFound() {
	return (
		<div className="errorWrapper">
			<p>Oops! Looks like you took a wrong turn. This page doesn&apos;t exist!</p>
			<TextLink href="./">Return home</TextLink>
		</div>
	);
}
