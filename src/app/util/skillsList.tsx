import sk from "../styles/home.module.scss";

const skills: string[] = ["Python", "Javascript", "React", "NextJS", "PHP", "SCSS", "Pytorch", "NumPy", "Docker", "Git"];
const listItems = skills.map((skill, i) => (
	<div key={String(i)} className={sk.item}>
		{skill}
	</div>
));

export default function SkillsList() {
	return <div className={sk.skillList}>{listItems}</div>;
}
