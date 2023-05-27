import { MoodOption } from '@/helpers/moodOptions';
import { DateTime } from 'luxon';
import React from 'react';

import { DatabaseContext } from './DatabaseContext';

type User = {
	currentRating: MoodOption;
	currentComment: string;
	currentDate: string | null;
	previousEntries: { rating: MoodOption; comment: string; date: string }[];
};

// * ----------------- User Context -----------------
interface UserContextProps {
	user: User | null;
	setUser: React.Dispatch<React.SetStateAction<User | null>>;
	handleSubmit: (rating: MoodOption, comment: string) => void;
}

export const UserContext = React.createContext<UserContextProps>({
	user: null,
	setUser: () => {},
	handleSubmit: () => {},
});

// * ----------------- User Provider -----------------
interface UserProviderProps {
	children: React.ReactNode;
}

function UserProvider({ children }: UserProviderProps) {
	const db = React.useContext(DatabaseContext);

	const userObject = {
		currentRating: MoodOption.NEUTRAL,
		currentComment: '',
		currentDate: DateTime.now().toISO(),
		previousEntries: [] as { rating: MoodOption; comment: string; date: string }[],
	};

	const [user, setUser] = React.useState<User | null>(null);

	function isUser(data: any): data is User {
		return data && typeof data === 'object' && 'currentRating' in data && 'currentComment' in data && typeof data.currentDate === 'string' && Array.isArray(data.previousEntries) && data.previousEntries.every((entry: any) => typeof entry.date === 'string');
	}

	React.useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await db?.getItem('userData');
				if (data && isUser(data)) {
					setUser(data);
				} else {
					setUser(userObject);
				}
			} catch (error) {
				console.error('Error retrieving user data: ', error);
				setUser(userObject);
			}
		};

		fetchData();
	}, [db]);

	const handleSubmit = (rating: MoodOption, comment: string) => {
		const currentDate = DateTime.now().setLocale('de');
		const currentDateString = currentDate.toISO();

		if (currentDateString !== null) {
			const newEntry = {
				rating: rating,
				comment: comment,
				date: currentDateString,
			};

			const newUser = {
				...user,
				currentRating: rating,
				currentComment: comment,
				currentDate: currentDateString,
				previousEntries: [...(user?.previousEntries || []), newEntry],
			};

			setUser(newUser);

			db?.setItem('userData', newUser)
				.then(() => console.log('Data stored successfully!'))
				.catch((err) => console.error(err));
		}
	};

	return <UserContext.Provider value={{ user, setUser, handleSubmit }}>{children}</UserContext.Provider>;
}

export default UserProvider;
