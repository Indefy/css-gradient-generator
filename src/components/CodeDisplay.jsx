// src/components/CodeDisplay.jsx
"use client";

import React, { useState } from "react";
import "../styles/components/CodeDisplay.scss";

const CodeDisplay = ({ gradient, compatibility, setCompatibility }) => {
	const [showCode, setShowCode] = useState(false);

	const generateGradientCSS = () => {
		const standard = `background: linear-gradient(90deg, ${gradient});`;
		const webkit = `background: -webkit-linear-gradient(90deg, ${gradient});`;
		const moz = `background: -moz-linear-gradient(90deg, ${gradient});`;
		const o = `background: -o-linear-gradient(90deg, ${gradient});`;
		const animation = `
      @keyframes gradientAnimation {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      background: linear-gradient(90deg, ${gradient});
      animation: gradientAnimation 15s ease infinite;
      background-size: 400% 400%;
    `;

		switch (compatibility) {
			case "animation":
				return `
        /* Modern Browsers with Animation */
        ${animation}
        `;
			case "all":
			default:
				return `
        /* Modern Browsers */
        ${standard}
        /* For Safari and older Chrome */
        ${webkit}
        /* For older Firefox */
        ${moz}
        /* For older Opera */
        ${o}
        `;
		}
	};

	const gradientCSS = generateGradientCSS();

	return (
		<div className="code-display">
			<div className="compatibility-options">
				<label>
					<input
						type="radio"
						value="all"
						checked={compatibility === "all"}
						onChange={(e) => setCompatibility(e.target.value)}
					/>
					All Browsers
				</label>
				<label>
					<input
						type="radio"
						value="animation"
						checked={compatibility === "animation"}
						onChange={(e) => setCompatibility(e.target.value)}
					/>
					Includes Animations
				</label>
			</div>
			<button onClick={() => setShowCode(!showCode)}>
				{showCode ? "Hide" : "Show"} CSS Code
			</button>
			{showCode && <pre>{gradientCSS}</pre>}
		</div>
	);
};

export default CodeDisplay;
