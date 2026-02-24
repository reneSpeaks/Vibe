import CheckInButton from '@components/CheckInButton';
import { MockCheckIn } from '@config/mock/MockCheckIn';
import { ProgressBarConfig, ProgressBarRingPath } from '@config/ProgressBar';

export default function ProgressBar() {
	const entries = [...MockCheckIn].sort((a, b) => a.id - b.id);

	let segmentSize;
	if (entries.length === 1) segmentSize = 40;
	else if (entries.length === 2) segmentSize = 60;
	else segmentSize = 100 / entries.length;

	return (
		<div className="progress-bar--container">
			<svg viewBox="0 0 100 100" className="progress-bar--circle" strokeLinecap="round" strokeLinejoin="round">
				<defs>
					{entries.length > 1 && (
						<>
							<filter id="end-shadow" filterUnits="userSpaceOnUse" x="10" y="10" width="100" height="100">
								<feGaussianBlur stdDeviation="1.5" />
							</filter>
							<mask id="ring-mask" maskUnits="userSpaceOnUse">
								<path fillRule="evenodd" d={ProgressBarRingPath} fill="white" />
							</mask>
						</>
					)}
					{entries.map((entry, i) => {
						const nextEntry = entries[i + 1];
						return (
							<linearGradient
								key={entry.id}
								id={`gradient-progress-bar-${entry.id}`}
								gradientUnits="userSpaceOnUse"
								x1={50 + 30 * Math.cos(((i * segmentSize) / 100) * 2 * Math.PI)}
								y1={50 + 30 * Math.sin(((i * segmentSize) / 100) * 2 * Math.PI)}
								x2={50 + 30 * Math.cos((((i + 1) * segmentSize) / 100) * 2 * Math.PI)}
								y2={50 + 30 * Math.sin((((i + 1) * segmentSize) / 100) * 2 * Math.PI)}>
								<stop offset="0%" stopColor={entry.colorPrimary} />
								{nextEntry ? (
									<>
										<stop offset="50%" stopColor={entry.colorSecondary} />
										<stop offset="100%" stopColor={nextEntry.colorPrimary} />
									</>
								) : (
									<stop offset="100%" stopColor={entry.colorSecondary} />
								)}
							</linearGradient>
						);
					})}
				</defs>

				{entries.map((entry, i) => {
					const isLast = entries.length > 1 && i === entries.length - 1;
					const circle = (
						<circle
							key={entry.id}
							stroke={`url(#gradient-progress-bar-${entry.id})`}
							strokeWidth={ProgressBarConfig.strokeWidth}
							cx="50"
							cy="50"
							r={ProgressBarConfig.radius}
							fill="none"
							pathLength="100"
							strokeDasharray={`${isLast ? segmentSize + 2 : segmentSize} 100`}
							strokeDashoffset={-i * segmentSize}
							transform="rotate(-90, 50, 50)"
						/>
					);

					// Shadow arc: a short blurred arc drawn just before the last segment,
					// so the last segment renders on top of it at the overlap point.
					// It starts at position 0 (12 o'clock) and extends 1 unit into
					// segment 0's territory, creating a depth shadow at the junction.
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

					if (!isLast) return [circle];
					return [shadowArc, circle];
				})}
			</svg>
			<CheckInButton />
		</div>
	);
}
