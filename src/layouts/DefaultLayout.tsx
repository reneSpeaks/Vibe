import { Outlet } from 'react-router';
import Header from '@components/Header';
import Profile from '@components/Settings';
import { ApplicationStateProvider } from '@context/ApplicationStateContext';

export default function DefaultLayout() {
	return (
		<ApplicationStateProvider>
			<Header />
			<div className="container">
				<Outlet />
			</div>
			<Profile />
		</ApplicationStateProvider>
	);
}
