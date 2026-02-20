import { Outlet } from 'react-router';
import Header from '@components/Header';
import Profile from '@components/Profile';
import { ApplicationStateProvider } from '@context/ApplicationStateContext';

export default function DefaultLayout() {
	return (
		<ApplicationStateProvider>
			<Header />
			<div className="container bg-amber-600">
				<Outlet />
			</div>
			<Profile />
		</ApplicationStateProvider>
	);
}
