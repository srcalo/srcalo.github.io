import Image from "next/image";
import styles from "./styles/home.module.scss";
import TextLink from "./util/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoodreads, faSteam } from "@fortawesome/free-brands-svg-icons";

import SkillsList from "./util/skillsList";

export default function Home() {
	return (
		<div className={styles.subWrapper}>
			<section className={styles.summaryWrapper}>
				<div className={styles.titleImageContainer}>
					<div className={styles.imageWrapper}>
						<Image fill src="/images/pfp_calo-somoza_sebastian.jpg" alt="Sebastian Profile Photo" />
					</div>
				</div>
				<div className={styles.titleText}>
					<h1 className={styles.subtitle}>
						Witnessing the beauty in <span className="gradient">everything.</span>
					</h1>
					<p className={styles.titleParagraph}>
						My name is <span className="primary">Sebastian</span> and I'm a software developer currently searching for work. I love the environment and the natural world for its
						unfathomable complexity emerging from the individuals within doing nothing but going about their day. I also explore the arts, weightlift and other physical activities, and
						experience all the world has to offer 😁
					</p>
				</div>
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
		</div>
	);
}
