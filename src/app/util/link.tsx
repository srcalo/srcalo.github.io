import Link from "next/link";
import "../styles/footer.scss";

interface TextLinkProps {
	href: string;
	children: any;
}

export default function TextLink({ href, children, ...rest }: TextLinkProps) {
	const isInternalLink = href.startsWith("/");
	if (isInternalLink) {
		return (
			<Link href={href} passHref>
				{children}
			</Link>
		);
	}
	return (
		<a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
			{children}
		</a>
	);
}
