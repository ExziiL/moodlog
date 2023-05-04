import { Mood } from '@/helpers/moodOptions';
import React from 'react';

interface UserContextProps {
	user: {
		currentRating: Mood;
		currentComment: string;
	};
	setUser: React.Dispatch<React.SetStateAction<{ currentRating: Mood; currentComment: string }>>;
}

export const UserContext = React.createContext<UserContextProps>({
	user: {
		currentRating: Mood.NEUTRAL,
		currentComment: '',
	},
	setUser: () => {},
});

interface UserProviderProps {
	children: React.ReactNode;
}

function UserProvider({ children }: UserProviderProps) {
	const [user, setUser] = React.useState({ currentRating: Mood.NEUTRAL, currentComment: '' });

	// TODO: Fetch user data from Database on initial load
	// TODO: useSWR

	return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}

export default UserProvider;
