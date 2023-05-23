import Button from '@/components/Button';
import { UserContext } from '@/contexts/UserProvider';
import Link from 'next/link';
import React from 'react';

// The user object looks like this:
// {
//     "currentRating": "neutral",
//     "currentComment": "I am feeling ok'ish",
//     "currentDate": "Tue May 23 2023 13:58:43 GMT+0200 (Central European Summer Time)",
//     "previousEntries": [
//         {
//             "rating": "bad",
//             "comment": "mir geht es super!",
//             "date": "Tue May 23 2023 13:40:28 GMT+0200 (Central European Summer Time)"
//         },
//         {
//             "rating": "bad",
//             "comment": "arstarst",
//             "date": "Tue May 23 2023 13:43:08 GMT+0200 (Central European Summer Time)"
//         },
//         {
//             "rating": "neutral",
//             "comment": "",
//             "date": "Tue May 23 2023 13:51:46 GMT+0200 (Central European Summer Time)"
//         },
//         {
//             "rating": "neutral",
//             "comment": "",
//             "date": "Tue May 23 2023 13:51:47 GMT+0200 (Central European Summer Time)"
//         },
//         {
//             "rating": "neutral",
//             "comment": "arstrast",
//             "date": "Tue May 23 2023 13:51:55 GMT+0200 (Central European Summer Time)"
//         },
//         {
//             "rating": "neutral",
//             "comment": "I am feeling ok'ish",
//             "date": "Tue May 23 2023 13:58:43 GMT+0200 (Central European Summer Time)"
//         }
//     ]
// }

export default function History() {
	const { user } = React.useContext(UserContext);

	console.log(user);

	return (
		<div className="flex flex-col">
			<h1 className="text-2xl">History Page</h1>
			<div>currentRating: {user.currentRating}</div>
			<div>currentComment: {user.currentComment}</div>
			<div>currentDate: {user.currentDate}</div>
			<div className="pt-10">
				<Link href="/feelings">
					<Button>Go to Feelings</Button>
				</Link>
			</div>
		</div>
	);
}
