import Button from '@/components/Button';
import FeelingsEntries from '@/components/FeelingsEntry/FeelingsEntries';
import Link from 'next/link';
import React from 'react';

export default function History() {
	return (
		<div className="flex flex-col p-2">
			<h1 className="text-2xl">History Page</h1>

			<FeelingsEntries />

			<div className="pt-10">
				<Link href="/feelings">
					<Button>Go to Feelings</Button>
				</Link>
			</div>
		</div>
	);
}
