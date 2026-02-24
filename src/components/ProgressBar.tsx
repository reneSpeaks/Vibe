import CheckInButton from '@components/CheckInButton';

export default function ProgressBar() {
	return (
		<div id="progress-bar--container">
			<svg viewBox="0 0 100 100">
				<circle stroke="#EAEAEA" strokeWidth="5.5" cx="50" cy="50" r="30" fill="none" />
				<circle id="progress--circle" stroke="#28411B" strokeWidth="5.5" cx="50" cy="50" r="30" fill="none" pathLength="100" />
			</svg>
			<CheckInButton />
		</div>
	);
}
