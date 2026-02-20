import { createContext, useContext } from 'react';
import { type ApplicationState } from '@config/Application';

interface ApplicationStateContextType {
	applicationState: ApplicationState;
	setApplicationState: React.Dispatch<React.SetStateAction<ApplicationState>>;
}

export const ApplicationStateContext = createContext<ApplicationStateContextType>({
	applicationState: 'Default',
	setApplicationState: () => {}
});

export function useApplicationState() {
	return useContext(ApplicationStateContext);
}
