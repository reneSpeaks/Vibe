import { useEffect, useState } from 'react';
import CheckInButton from '@components/CheckInButton';
import { MockCheckIn } from '@config/mock/MockCheckIn';
import { ProgressBarConfig, ProgressBarRingPath } from '@config/ProgressBar';

export default function ProgressBar() {
	const entries = [...MockCheckIn].sort((a, b) => a.id - b.id);
	const n = entries.length;
	const transitionRatio = 1;
	const fillDuration = 1.2;

	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		requestAnimationFrame(() => setLoaded(true));
	}, []);

	let mainSize: number;
	let transSize: number;

	if (n === 1) {
		mainSize = 40;
		transSize = 0;
	} else {
		mainSize = 100 / (n + (n - 1) * transitionRatio);
		transSize = mainSize * transitionRatio;
	}

	const getMainOffset = (i: number) => i * (mainSize + transSize);
	const getTransOffset = (i: number) => i * (mainSize + transSize) + mainSize;

	const gradientCoords = (start: number, end: number) => ({
		x1: 50 + 30 * Math.cos((start / 100) * 2 * Math.PI),
		y1: 50 + 30 * Math.sin((start / 100) * 2 * Math.PI),
		x2: 50 + 30 * Math.cos((end / 100) * 2 * Math.PI),
		y2: 50 + 30 * Math.sin((end / 100) * 2 * Math.PI)
	});

	const totalArc = n === 1 ? mainSize : 100;

	return (
		<div className="progress-bar--container">
			<svg viewBox="0 0 100 100" strokeLinecap="round" strokeLinejoin="round">
				<defs>
					{n > 1 && (
						<>
							<filter id="end-shadow" filterUnits="userSpaceOnUse" x="10" y="10" width="100" height="100">
								<feGaussianBlur stdDeviation="1.5" />
							</filter>
							<mask id="ring-mask" maskUnits="userSpaceOnUse">
								<path fillRule="evenodd" d={ProgressBarRingPath} fill="white" />
							</mask>
						</>
					)}

					<mask id="reveal-mask" maskUnits="userSpaceOnUse">
						<circle
							stroke="white"
							strokeWidth={ProgressBarConfig.strokeWidth}
							cx="50"
							cy="50"
							r={ProgressBarConfig.radius}
							fill="none"
							pathLength="100"
							strokeDasharray={`${loaded ? totalArc : 0} 100`}
							strokeDashoffset={loaded ? 0 : -totalArc}
							transform="rotate(-90, 50, 50)"
							style={{
								transition: `stroke-dasharray ${fillDuration}s ease-out, stroke-dashoffset ${fillDuration}s ease-out`
							}}
						/>
					</mask>

					{/* Main gradients: primary → secondary for each entry */}
					{entries.map((entry, i) => {
						const start = getMainOffset(i);
						const coords = gradientCoords(start, start + mainSize);
						return (
							<linearGradient
								key={`main-${entry.id}`}
								id={`progress-bar--gradient-main-${entry.id}`}
								gradientUnits="userSpaceOnUse"
								x1={coords.x1}
								y1={coords.y1}
								x2={coords.x2}
								y2={coords.y2}>
								<stop offset="0%" stopColor={entry.colorPrimary} />
								<stop offset="100%" stopColor={entry.colorSecondary} />
							</linearGradient>
						);
					})}

					{/* Transition gradients: secondary → next primary (between entries) */}
					{entries.slice(0, -1).map((entry, i) => {
						const nextEntry = entries[i + 1];
						const start = getTransOffset(i);
						const coords = gradientCoords(start, start + transSize);
						return (
							<linearGradient
								key={`trans-${entry.id}`}
								id={`progress-bar--gradient-trans-${entry.id}`}
								gradientUnits="userSpaceOnUse"
								x1={coords.x1}
								y1={coords.y1}
								x2={coords.x2}
								y2={coords.y2}>
								<stop offset="0%" stopColor={entry.colorSecondary} />
								<stop offset="100%" stopColor={nextEntry.colorPrimary} />
							</linearGradient>
						);
					})}
				</defs>

				<g mask="url(#reveal-mask)">
					{entries.map((entry, i) => {
						const isLast = n > 1 && i === n - 1;

						const mainCircle = (
							<circle
								key={`main-${entry.id}`}
								stroke={`url(#progress-bar--gradient-main-${entry.id})`}
								strokeWidth={ProgressBarConfig.strokeWidth}
								cx="50"
								cy="50"
								r={ProgressBarConfig.radius}
								fill="none"
								pathLength="100"
								strokeDasharray={`${isLast ? mainSize + 2 : mainSize} 100`}
								strokeDashoffset={-getMainOffset(i)}
								transform="rotate(-90, 50, 50)"
							/>
						);

						const transCircle =
							i < n - 1 ? (
								<circle
									key={`trans-${entry.id}`}
									stroke={`url(#progress-bar--gradient-trans-${entry.id})`}
									strokeWidth={ProgressBarConfig.strokeWidth}
									cx="50"
									cy="50"
									r={ProgressBarConfig.radius}
									fill="none"
									pathLength="100"
									strokeDasharray={`${transSize} 100`}
									strokeDashoffset={-getTransOffset(i)}
									transform="rotate(-90, 50, 50)"
								/>
							) : null;

						const shadowArc = (
							<circle
								key="end-shadow-arc"
								stroke="#181818"
								strokeOpacity={0.5}
								strokeWidth={ProgressBarConfig.strokeWidth}
								cx="50"
								cy="50"
								r={ProgressBarConfig.radius}
								fill="none"
								pathLength="100"
								strokeDasharray="1 100"
								strokeDashoffset={0}
								transform="rotate(-90, 50, 50)"
								filter="url(#end-shadow)"
								mask="url(#ring-mask)"
							/>
						);

						if (isLast) return [shadowArc, mainCircle];
						return [mainCircle, transCircle].filter(Boolean);
					})}
				</g>
			</svg>
			<CheckInButton />
		</div>
	);
}
