"use client";

import { Typewriter } from "react-simple-typewriter";

const phrases: string[] = ["Let's be friends!", "Let's grab lunch together?", "Don't be shy, say hello!", "I hope you enjoy your stay", "Won't you say hello?"];

export default function EyeCatcher() {
	return (
		<div className={"eyeCatcher"}>
			<Typewriter words={phrases} typeSpeed={30} deleteSpeed={15} delaySpeed={5000} loop={false} cursor={true} cursorBlinking={true} />
		</div>
	);
}
