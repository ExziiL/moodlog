import FeelingsEntries from '@/components/FeelingsEntry/FeelingsEntries';
import React from 'react';

export default function History() {
	return (
		<div className="flex flex-col p-2">
			<h1 className="text-2xl">History Page</h1>
			<FeelingsEntries />
		</div>
	);
}
