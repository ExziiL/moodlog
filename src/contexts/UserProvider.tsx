import React from 'react';

interface UserContextProps {
	user: {};
	setUser: React.Dispatch<React.SetStateAction<{}>>;
}

export const UserContext = React.createContext<UserContextProps>({
	user: {},
	setUser: () => {},
});

interface UserProviderProps {
	children: React.ReactNode;
}

function UserProvider({ children }: UserProviderProps) {
	const [user, setUser] = React.useState({});

	// TODO: Fetch user data from Database on initial load
	// TODO: useSWR

	return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}

export default UserProvider;
