export default function HeaderDate() {
	return (
		<div className="header--date">
			<h3>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</h3>
			<h2>{new Date().toLocaleDateString('en-US', { weekday: 'long' })}</h2>
		</div>
	);
}
