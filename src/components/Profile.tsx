import { useApplicationState } from '@hooks/useApplicationState';

export default function Profile() {
	const { applicationState, setApplicationState } = useApplicationState();

	return (
		<section className={`mobile--profile ${applicationState === 'MobileMenu' && 'active'}`}>
			<div className="mobile--profile--container">
				<div className="mobile--profile--header">
					<h2>Menu</h2>
					<span onClick={() => setApplicationState('Default')}>X</span>
				</div>
				<div className="mobile--profile--content">
					<h3>Account</h3>
					<button>Coming Soon</button>
					<h3>Settings</h3>
					<button>Coming Soon</button>
					<h3>Preferences</h3>
					<button>Coming Soon</button>
					<h3>Support</h3>
					<button>Coming Soon</button>
				</div>
			</div>
		</section>
	);
}
