import { useState } from 'react';
import { ApplicationStateContext } from '@hooks/useApplicationState';
import type { ApplicationState } from '@config/Application';

export function ApplicationStateProvider({ children }: { children: React.ReactNode }) {
	const [applicationState, setApplicationState] = useState<ApplicationState>('Default');

	return <ApplicationStateContext.Provider value={{ applicationState, setApplicationState }}>{children}</ApplicationStateContext.Provider>;
}
