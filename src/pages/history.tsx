import Button from '@/components/Button';
import { UserContext } from '@/contexts/UserProvider';
import Link from 'next/link';
import React from 'react';

export default function History() {
	const { user } = React.useContext(UserContext);

	return (
		<div className="flex flex-col">
			<h1 className="text-2xl">History Page</h1>
			<div>{user.currentRating}</div>
			<div>{user.currentComment}</div>
			<div className="pt-10">
				<Link href="/">
					<Button>Go to Homepage</Button>
				</Link>
			</div>
		</div>
	);
}
