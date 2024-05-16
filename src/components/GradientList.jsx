// src/components/GradientList.jsx
"use client";

import React from "react";
import "../styles/components/GradientList.scss";

const GradientList = ({ gradients }) => {
	return (
		<div className="gradient-list">
			{gradients.map((gradient, index) => (
				<div
					key={index}
					className="gradient-item"
					style={{ background: gradient.color }}
				>
					{gradient.color} - {gradient.position}%
				</div>
			))}
		</div>
	);
};

export default GradientList;
