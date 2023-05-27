import { MoodOption } from '@/helpers/moodOptions';
import { DateTime } from 'luxon';
import * as React from 'react';

import awesomeIcon from '@/assets/svgs/awesome.svg';
import awfulIcon from '@/assets/svgs/awful.svg';
import badIcon from '@/assets/svgs/bad.svg';
import goodIcon from '@/assets/svgs/good.svg';
import neutralIcon from '@/assets/svgs/neutral.svg';

import Mood from '../Mood/Mood';

interface FeelingsEntryProps {
	entry: {
		rating: MoodOption;
		comment: string;
		date: string;
	};
}

function FeelingsEntry({ entry }: FeelingsEntryProps) {
	const mood = entry.rating;

	const weekday = DateTime.fromISO(entry.date).weekdayLong;
	const day = DateTime.fromISO(entry.date).day;
	const month = DateTime.fromISO(entry.date).monthLong;
	const year = DateTime.fromISO(entry.date).year;

	const date = `${day}. ${month} ${year}`;

	const moodIconMapping = {
		awesome: awesomeIcon,
		good: goodIcon,
		neutral: neutralIcon,
		bad: badIcon,
		awful: awfulIcon,
	};

	return (
		<div className="max-w-sm">
			<div className="flex space-x-4">
				<div className="text-xl font-bold">{weekday}</div>
				<div>{date}</div>
			</div>
			<div className="flex items-center space-x-4">
				<Mood
					src={moodIconMapping[mood]}
					alt={`${mood} Icon`}
					className=""
				/>
				<div>{entry.comment}</div>
			</div>
		</div>
	);
}

export default FeelingsEntry;
