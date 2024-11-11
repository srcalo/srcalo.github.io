import Image from "next/image";
import styles from "./styles/home.module.scss";
import TextLink from "./util/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoodreads, faSteam } from "@fortawesome/free-brands-svg-icons";

import SkillsList from "./util/skillsList";

export default function Home() {
	return (
		<>
			<section className={styles.summaryWrapper}>
				<div className={styles.titleContainer}>
					<div className={styles.titleText} title="HELLO">
						<span>H</span>
						<span>E</span>
						<span>L</span>
						<span>L</span>
						<span>O</span>
					</div>
					<div className={styles.imageWrapper}>
						<Image fill src="./images/pfp_calo-somoza_sebastian.jpg" alt="Sebastian Profile Photo" />
					</div>
					<div className={`${styles.titleText} primary`} title="WORLD">
						<span>W</span>
						<span>O</span>
						<span>R</span>
						<span>L</span>
						<span>D</span>
					</div>
				</div>
				<p className={styles.subtitle}>Jack of all trades, Master of none</p>
				<p>
					My name is <span className="primary">Sebastian</span> and I studied computer science at University at Buffalo. Professionally I make software and am working on expanding into the
					sustainability industry. Amateurishly, I like to exercise, create, read, and explore!
				</p>
			</section>
			<section className={styles.contentWrapper}>
				<div className={styles.skillsWrapper}>
					<h2>Skills</h2>
					<SkillsList />
				</div>
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
								<li>
									Learning pixel art in <TextLink href="https://www.aseprite.org/">Aseprite</TextLink> and how to draw on paper 🎨
								</li>
								<li>
									Also exploring the world of <TextLink href="https://inconvergent.net/generative/">generative art</TextLink> and{" "}
									<TextLink href="https://en.wikipedia.org/wiki/Emergence">emergent behavior</TextLink>
								</li>
							</ul>
						</li>
						<li>
							Music
							<ul>
								<li>
									Playing with sound design in <TextLink href="https://www.reaper.fm/">Reaper</TextLink> because I won&apos;t pay for FL studio 🎹
								</li>
								<li>Washed piano player &#40;sorry, mom&#41;</li>
							</ul>
						</li>
						<li>
							Videogames
							<ul>
								<li>
									I&#39;ve played several thousand hours of games over my lifetime. Check out my{" "}
									<TextLink href="https://steamcommunity.com/id/BeanSpace/">
										<FontAwesomeIcon icon={faSteam} /> Steam
									</TextLink>{" "}
									for a good estimate on what I like to play 🕹️
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<div className={styles.readingListWrapper}>
					<h2>Reading List</h2>
					<p>Check out my list of past reads! I like to read sci-fi, science, and anything else recommended to me. If you&#39;ve got a good recommendation, tell me about it!</p>
					<br />
					<TextLink href="https://www.goodreads.com/srcalo">
						<FontAwesomeIcon icon={faGoodreads} /> Good Reads
					</TextLink>
				</div>
			</section>
		</>
	);
}
