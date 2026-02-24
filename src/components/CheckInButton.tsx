import { IPlusCircle } from '@assets/icons/IPlusCircle';

export default function CheckInButton() {
	return (
		<>
			<button className="progress-bar--check-in">
				<IPlusCircle width={50} height={50} strokeWidth={1} />
				<h4>Check in</h4>
			</button>
		</>
	);
}
