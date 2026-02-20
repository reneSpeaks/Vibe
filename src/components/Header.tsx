import { useApplicationState } from '@hooks/useApplicationState';
import HeaderDate from '@components/HeaderDate';
import { FaUserLarge } from 'react-icons/fa6';

export default function Header() {
	const { setApplicationState } = useApplicationState();

	return (
		<>
			<header className="header">
				<HeaderDate />
				<FaUserLarge className="header--profile" onClick={() => setApplicationState('MobileMenu')} />
			</header>
			<div className="header--spacer" />
		</>
	);
}
