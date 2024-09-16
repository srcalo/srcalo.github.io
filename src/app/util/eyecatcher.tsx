"use client";

import f from "../styles/footer.module.scss";
import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

const phrases: string[] = [
	"If you thought I was cool, let's chat :)",
	"Would you like to grab some lunch?",
	"Don't be shy, say hello!",
	"I hope you enjoy your stay",
	"Sometimes I wonder if I'm being watched",
	"Won't you say hello?",
	"Check out my spotify!",
];

export default function EyeCatcher() {
	return (
		<div className={f.eyeCatcher}>
			<Typewriter words={phrases} typeSpeed={30} deleteSpeed={15} delaySpeed={5000} loop={false} cursor={true} cursorBlinking={true} />
		</div>
	);
}
