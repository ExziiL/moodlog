import React from 'react';

import { UserContext } from '@/contexts/UserProvider';
import FeelingsEntry from './FeelingsEntry';

function FeelingsEntries() {
	const { user } = React.useContext(UserContext);

	console.log(user);

	return (
		<div className="mt-12 space-y-8">
			{user.previousEntries.map((entry, index) => {
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
