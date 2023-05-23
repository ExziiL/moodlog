import { MoodOption } from '@/helpers/moodOptions';
import React from 'react';

type User = {
	currentRating: MoodOption;
	currentComment: string;
	currentDate: string;
	previousEntries: { rating: MoodOption; comment: string }[];
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
		currentDate: '',
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
	const [user, setUser] = React.useState({ currentRating: MoodOption.NEUTRAL, currentComment: '', currentDate: Date(), previousEntries: [] as { rating: MoodOption; comment: string }[] });

	const handleSubmit = (rating: MoodOption, comment: string) => {
		setUser((prevUser) => ({
			currentRating: rating,
			currentComment: comment,
			currentDate: Date(),
			previousEntries: [
				...prevUser.previousEntries,
				{
					rating: rating,
					comment: comment,
					date: Date(),
				},
			],
		}));
	};

	return <UserContext.Provider value={{ user, setUser, handleSubmit }}>{children}</UserContext.Provider>;
}

export default UserProvider;
