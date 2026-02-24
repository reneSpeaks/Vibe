import ProgressBar from '@components/ProgressBar';

export default function Home() {
	return (
		<section className="flex w-full flex-col items-center">
			<h1 className="text-4xl font-bold">How are you feeling?</h1>
			<ProgressBar />
		</section>
	);
}
