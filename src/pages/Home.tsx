import ProgressBar from '@components/ProgressBar';

export default function Home() {
	const timeOfDay = new Date().getHours();

	return (
		<section>
			<h1>How are you feeling this {timeOfDay < 12 ? 'morning' : timeOfDay < 18 ? 'afternoon' : 'evening'}?</h1>
			<ProgressBar />
		</section>
	);
}
