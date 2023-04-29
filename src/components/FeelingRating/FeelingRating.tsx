import * as React from 'react';

import awesomeIcon from '@/assets/svgs/awesome.svg';
import awfulIcon from '@/assets/svgs/awful.svg';
import badIcon from '@/assets/svgs/bad.svg';
import goodIcon from '@/assets/svgs/good.svg';
import neutralIcon from '@/assets/svgs/neutral.svg';
import Image from 'next/image';
import MoodRating from '../MoodRating/MoodRating';
import TextInput from '../TextInput/TextInput';

const feelings = [
	{
		icon: awesomeIcon,
		alt: 'Awesome Icon',
		text: 'Awesome',
	},
	{
		icon: goodIcon,
		alt: 'Good Icon',
		text: 'Good',
	},
	{
		icon: neutralIcon,
		alt: 'Neutral Icon',
		text: 'Neutral',
	},
	{
		icon: badIcon,
		alt: 'Bad Icon',
		text: 'Bad',
	},
	{
		icon: awfulIcon,
		alt: 'AwfulIcon',
		text: 'Awful',
	},
];

function FeelingRating() {
	return (
		<div className="space-y-20">
			<section>
				<h2 className="w-full pb-2 text-4xl font-semibold">How are you feeling?</h2>
				<div className="flex justify-between max-w-sm">
					{feelings.map(({ icon, alt, text }) => {
						return (
							<MoodRating
								key={text}
								src={icon}
								alt={alt}
								text={text}
							/>
						);
					})}
				</div>
			</section>
			<section>
				<TextInput
					multiline
					required
					label="Write a sentence"
					type="text"
					className="flex border-2 resize-none"
					rows={5}
					cols={45}
				/>
			</section>
		</div>
	);
}

export default FeelingRating;
