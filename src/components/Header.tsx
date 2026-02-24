import { useApplicationState } from '@hooks/useApplicationState';
import HeaderDate from '@components/HeaderDate';
import { IUser } from '@assets/icons';

export default function Header() {
	const { setApplicationState } = useApplicationState();

	return (
		<>
			<header className="header">
				<HeaderDate />
				<IUser className="header--profile" onClick={() => setApplicationState('Settings')} />
			</header>
		</>
	);
}
