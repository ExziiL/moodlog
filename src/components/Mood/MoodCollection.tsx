import React from 'react';

import { MoodOption } from '@/helpers/moodOptions';

import awesomeIcon from '@/assets/svgs/awesome.svg';
import awfulIcon from '@/assets/svgs/awful.svg';
import badIcon from '@/assets/svgs/bad.svg';
import goodIcon from '@/assets/svgs/good.svg';
import neutralIcon from '@/assets/svgs/neutral.svg';

import Mood from './Mood';

const feelings = [
	{
		icon: awesomeIcon,
		alt: 'Awesome Icon',
		description: 'Awesome',
	},
	{
		icon: goodIcon,
		alt: 'Good Icon',
		description: 'Good',
	},
	{
		icon: neutralIcon,
		alt: 'Neutral Icon',
		description: 'Neutral',
	},
	{
		icon: badIcon,
		alt: 'Bad Icon',
		description: 'Bad',
	},
	{
		icon: awfulIcon,
		alt: 'AwfulIcon',
		description: 'Awful',
	},
];

interface MoodCollectionProps {
	activeMood: string;
	setActiveMood: React.Dispatch<React.SetStateAction<MoodOption>>;
}

function MoodCollection({ activeMood, setActiveMood }: MoodCollectionProps) {
	return (
		<div className="flex justify-between max-w-sm">
			{feelings.map(({ icon, alt, description }) => {
				const selectedMoodStyling = activeMood === description.toLowerCase() ? 'border-2 rounded-md bg-gray-50 shadow-sm' : '';
				return (
					<Mood
						key={description}
						src={icon}
						alt={alt}
						description={description}
						className={selectedMoodStyling}
						onClick={() => {
							setActiveMood(description.toLowerCase() as MoodOption);
						}}
					/>
				);
			})}
		</div>
	);
}

export default MoodCollection;
