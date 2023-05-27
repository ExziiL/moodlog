import React from 'react';

import { DatabaseContext } from '@/contexts/DatabaseContext';
import { UserContext } from '@/contexts/UserProvider';
import FeelingsEntry from './FeelingsEntry';

function FeelingsEntries() {
	const { user, setUser } = React.useContext(UserContext);
	const [loading, setLoading] = React.useState(true);

	const db = React.useContext(DatabaseContext);

	React.useEffect(() => {
		db?.getItem('userData')
			.then((data) => {
				if (typeof data === 'string' && data !== '') {
					const parsedData = JSON.parse(data);
					setUser(parsedData);
				}
			})
			.catch((error) => {
				console.error('Error retrieving user data: ', error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [setUser]);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="mt-12 space-y-8">
			{user &&
				user.previousEntries.map((entry, index) => {
					return (
						<div key={index}>
							<FeelingsEntry entry={entry} />
						</div>
					);
				})}
		</div>
	);
}

export default FeelingsEntries;
