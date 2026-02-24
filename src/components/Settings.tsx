import { IClose } from '@assets/icons';
import SettingsNavItem from '@components/SettingsNavItem';

import { useApplicationState } from '@hooks/useApplicationState';
import { Navigation, Resources } from '@config/Settings';

export default function Settings() {
	const { applicationState, setApplicationState } = useApplicationState();

	return (
		<section className={`settings ${applicationState === 'Settings' && 'active'}`}>
			<div className="settings--container">
				<div className="settings--header">
					<h2>Settings</h2>
					<IClose className="settings--close" onClick={() => setApplicationState('Default')} />
				</div>
				<ul className="settings--content">
					{Navigation.map((item, index) => (
						<SettingsNavItem key={index} title={item.name} icon={item.icon} />
					))}
				</ul>
				<h3>Resources</h3>
				<ul className="settings--content">
					{Resources.map((item, index) => (
						<SettingsNavItem key={index} title={item.name} icon={item.icon} />
					))}
				</ul>
			</div>
		</section>
	);
}
