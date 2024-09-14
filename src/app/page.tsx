import Image from "next/image";
import styles from "./styles/home.module.scss";
import TextLink from "./util/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoodreads } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
	return (
		<main className={"main"}>
			<div className={"wrapper"}>
				<div className={styles.titleWrapper}>
					<div className={styles.imageContainer}>
						<h1 title={"HELLO"}>
							<span>H</span>
							<span>E</span>
							<span>L</span>
							<span>L</span>
							<span>O</span>
						</h1>
						<Image src="/images/pfp_calo-somoza_sebastian.jpg" alt="Sebastian Profile Photo" width={150} height={150} />
						<h1 className={"primary"} title="WORLD">
							<span>W</span>
							<span>O</span>
							<span>R</span>
							<span>L</span>
							<span>D</span>
						</h1>
					</div>
					<p>
						My name is <span className={"primary"}>Sebastian</span> and I studied computer science at University at Buffalo. Professionally I make software and am working on expanding into
						sustainability software. Amateurishly, I like to bodybuild, draw, make music, and read!
					</p>
				</div>
				<div className={styles.contentWrapper}>
					<div className={styles.hobbiesWrapper}>
						<h2>Current Hobbies</h2>
						<ul>
							<li>
								Weight Lifting
								<ul>
									<li>Becoming big and strong so I can bring in the groceries in one trip 💪</li>
									<li>Also to be comically large in a profession that doesn&#39;t need me to be</li>
								</ul>
							</li>
							<li>
								Drawing
								<ul>
									<li>Learning pixel art in Aseprite</li>
									<li>I like drawing skeletons ☠️</li>
								</ul>
							</li>
							<li>
								Music
								<ul>
									<li>Playing electronic music. I&#39;ll lyk when I finally make a song and don&#39;t just play with sound design for 3 hours straight</li>
									<li>Washed piano player (sorry, mom)</li>
								</ul>
							</li>
							<li>
								Videogames
								<ul>
									<li>I&#39;ve played several thousand hours of games over my lifetime. Check out my steam account for a good estimate on what I like to play :&#40;</li>
									<li>Steam</li>
								</ul>
							</li>
						</ul>
					</div>
					<div className={styles.skillsWrapper}>
						<h2>Skills</h2>
						{/* <SkillsList /> */}
					</div>
					<div className={styles.readingListWrapper}>
						<h2>Reading List</h2>
						<p>Check out my list of past reads! I like to read sci-fi, science, and anything else recommended to me. If you&#39;ve got a good recommendation, tell me about it!</p>
						<br />
						<TextLink href="https://www.goodreads.com/srcalo">
							<FontAwesomeIcon icon={faGoodreads} /> Good Reads
						</TextLink>
					</div>
				</div>
			</div>
		</main>
	);
}
