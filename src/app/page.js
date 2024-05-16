"use client";

import React, { useState } from "react";
import GradientPreview from "@/components/GradientPreview";
import GradientControls from "@/components/GradientControls";
import CodeDisplay from "@/components/CodeDisplay";
import "./page.scss";

const Home = () => {
	const [gradients, setGradients] = useState([
		{ color: "#ff0000", position: 0 },
		{ color: "#0000ff", position: 100 },
	]);
	const [compatibility, setCompatibility] = useState("all");

	const gradientString = gradients
		.map((g) => `${g.color} ${g.position}%`)
		.join(", ");

	return (
		<div className="container">
			<h1>CSS Gradient Generator</h1>
			<GradientPreview
				gradient={gradientString}
				compatibility={compatibility}
			/>
			<GradientControls gradients={gradients} setGradients={setGradients} />
			<CodeDisplay
				gradient={gradientString}
				compatibility={compatibility}
				setCompatibility={setCompatibility}
			/>
			<div className="footer">
				<h4> Site created by Adi Booker 2024</h4>
			</div>
		</div>
	);
};

export default Home;
