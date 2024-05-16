"use client";

import React from "react";
import "../styles/components/GradientPreview.scss";

const GradientPreview = ({ gradient, compatibility }) => {
	const standard = `linear-gradient(90deg, ${gradient})`;
	const webkit = `-webkit-linear-gradient(90deg, ${gradient})`;
	const moz = `-moz-linear-gradient(90deg, ${gradient})`;
	const o = `-o-linear-gradient(90deg, ${gradient})`;

	const previewStyle = {
		backgroundImage: standard,
	};

	if (compatibility === "all") {
		previewStyle.backgroundImage = standard;
		previewStyle.WebkitBackgroundImage = webkit;
		previewStyle.MozBackgroundImage = moz;
		previewStyle.OBackgroundImage = o;
	}

	if (compatibility === "animation") {
		previewStyle.backgroundImage = standard;
		previewStyle.animation = "gradientAnimation 15s ease infinite";
		previewStyle.backgroundSize = "400% 400%";
	} else {
		previewStyle.animation = undefined;
		previewStyle.backgroundSize = undefined;
	}

	return <div className="preview-container" style={previewStyle}></div>;
};

export default GradientPreview;
