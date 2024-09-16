import TextLink from "./link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faInstagram, faLinkedin, faSpotify } from "@fortawesome/free-brands-svg-icons";
import f from "../styles/footer.module.scss";

import EyeCatcher from "./eyecatcher";

export default function Footer() {
	return (
		<footer className={f.footer}>
			<div className={f.footerWrapper}>
				<EyeCatcher />
				<address className={f.socials}>
					<TextLink href="mailto:sebastianrcalo@gmail.com">
						<FontAwesomeIcon icon={faEnvelope} size="2x" />
					</TextLink>
					<TextLink href="https://www.linkedin.com/in/sebastianrcalo/">
						<FontAwesomeIcon icon={faLinkedin} size="2x" />
					</TextLink>
					<TextLink href="https://github.com/srcalo">
						<FontAwesomeIcon icon={faGithub} size="2x" />
					</TextLink>
					<TextLink href="https://www.instagram.com/_sebastiancalo_/">
						<FontAwesomeIcon icon={faInstagram} size="2x" />
					</TextLink>
					<TextLink href="https://open.spotify.com/user/blablathesecond?si=7b6c15077b5c4ac4">
						<FontAwesomeIcon icon={faSpotify} size="2x" />
					</TextLink>
				</address>
			</div>
		</footer>
	);
}
