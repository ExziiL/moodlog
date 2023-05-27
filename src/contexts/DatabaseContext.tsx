import localForage from 'localforage';
import React from 'react';

// * ----------------- Database Context -----------------
export const DatabaseContext = React.createContext<LocalForage | undefined>(undefined);

// * ----------------- Database Provider -----------------
interface DatabaseProviderProps {
	children: React.ReactNode;
}

const DatabaseProvider = ({ children }: DatabaseProviderProps) => {
	React.useEffect(() => {
		localForage.config({
			driver: localForage.INDEXEDDB,
			name: 'moodtracker',
			version: 1.0,
			storeName: 'moodtracker',
			description: 'Moodtracker database',
		});
	}, []);

	return <DatabaseContext.Provider value={localForage}>{children}</DatabaseContext.Provider>;
};

export default DatabaseProvider;
