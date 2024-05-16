// src/components/GradientControls.jsx
"use client";

import React from "react";
import "../styles/components/GradientControls.scss";

const GradientControls = ({ gradients, setGradients }) => {
	const addColor = () => {
		setGradients([...gradients, { color: "#ffffff", position: 50 }]);
	};

	const removeColor = (index) => {
		const newGradients = gradients.filter((_, i) => i !== index);
		setGradients(newGradients);
	};

	const clearColors = () => {
		setGradients([]);
	};

	const updateColor = (index, color) => {
		const newGradients = gradients.map((gradient, i) =>
			i === index ? { ...gradient, color } : gradient
		);
		setGradients(newGradients);
	};

	const updatePosition = (index, position) => {
		const newGradients = gradients.map((gradient, i) =>
			i === index ? { ...gradient, position } : gradient
		);
		setGradients(newGradients);
	};

	return (
		<div className="gradient-controls">
			{gradients.map((gradient, index) => (
				<div key={index} className="gradient-control">
					<input
						type="color"
						value={gradient.color}
						onChange={(e) => updateColor(index, e.target.value)}
					/>
					<input
						type="range"
						min="0"
						max="100"
						value={gradient.position}
						onChange={(e) => updatePosition(index, e.target.value)}
					/>
					<button onClick={() => removeColor(index)}>Remove</button>
				</div>
			))}
			<div className="buttons">
				<button onClick={addColor}>Add Color</button>
				<button onClick={clearColors}>Remove All Colors</button>
			</div>
		</div>
	);
};

export default GradientControls;
