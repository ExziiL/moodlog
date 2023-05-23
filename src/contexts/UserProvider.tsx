import { MoodOption } from '@/helpers/moodOptions';
import { DateTime } from 'luxon';
import React from 'react';

type User = {
	currentRating: MoodOption;
	currentComment: string;
	currentDate: DateTime;
	previousEntries: { rating: MoodOption; comment: string; date: DateTime }[];
};

// * ----------------- User Context -----------------
interface UserContextProps {
	user: User;
	setUser: React.Dispatch<React.SetStateAction<User>>;
	handleSubmit: (rating: MoodOption, comment: string) => void;
}

export const UserContext = React.createContext<UserContextProps>({
	user: {
		currentRating: MoodOption.NEUTRAL,
		currentComment: '',
		currentDate: DateTime.now().setLocale('de'),
		previousEntries: [],
	},
	setUser: () => {},
	handleSubmit: () => {},
});

// * ----------------- User Provider -----------------
interface UserProviderProps {
	children: React.ReactNode;
}

function UserProvider({ children }: UserProviderProps) {
	const [user, setUser] = React.useState({ currentRating: MoodOption.NEUTRAL, currentComment: '', currentDate: DateTime.now().setLocale('de'), previousEntries: [] as { rating: MoodOption; comment: string; date: DateTime }[] });

	const handleSubmit = (rating: MoodOption, comment: string) => {
		setUser((prevUser) => ({
			currentRating: rating,
			currentComment: comment,
			currentDate: DateTime.now().setLocale('de'),
			previousEntries: [
				...prevUser.previousEntries,
				{
					rating: rating,
					comment: comment,
					date: DateTime.now().setLocale('de'),
				},
			],
		}));
	};

	return <UserContext.Provider value={{ user, setUser, handleSubmit }}>{children}</UserContext.Provider>;
}

export default UserProvider;
