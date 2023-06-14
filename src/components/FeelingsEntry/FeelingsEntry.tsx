import { MoodOption } from '@/helpers/moodOptions';
import { DateTime } from 'luxon';
import * as React from 'react';

import awesomeIcon from '@/assets/svgs/awesome.svg';
import awfulIcon from '@/assets/svgs/awful.svg';
import badIcon from '@/assets/svgs/bad.svg';
import goodIcon from '@/assets/svgs/good.svg';
import neutralIcon from '@/assets/svgs/neutral.svg';

import Mood from '../Mood/Mood';
import EntryDelete from './EntryDelete';

interface FeelingsEntryProps {
	entry: {
		rating: MoodOption;
		comment: string;
		date: string;
	};
}

function FeelingsEntry({ entry }: FeelingsEntryProps) {
	const [isHovered, setIsHovered] = React.useState(false);

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

	let timer: string | number | NodeJS.Timeout | undefined;
	const handleMouseEnter = () => {
		timer = setTimeout(() => {
			setIsHovered(true);
		}, 200);
	};
	const handleMouseLeave = () => {
		clearTimeout(timer);
		setIsHovered(false);
	};

	return (
		<div
			className="max-w-sm"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div className="flex space-x-4">
				<div className="text-xl font-bold">{weekday}</div>
				<div>{date}</div>
			</div>
			<div className="relative flex w-auto space-x-4">
				<div className="flex items-center">
					<Mood
						src={moodIconMapping[mood]}
						alt={`${mood} Icon`}
						className=""
					/>
					<div>{entry.comment}</div>
				</div>
				{isHovered && <EntryDelete id={entry.date} />}
			</div>
		</div>
	);
}

export default FeelingsEntry;
