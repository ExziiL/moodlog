import * as React from 'react';

import awesomeIcon from '@/assets/svgs/awesome.svg';
import awfulIcon from '@/assets/svgs/awful.svg';
import badIcon from '@/assets/svgs/bad.svg';
import goodIcon from '@/assets/svgs/good.svg';
import neutralIcon from '@/assets/svgs/neutral.svg';
import Image from 'next/image';
import Button from '../Button/Button';
import MoodRating from '../MoodRating/MoodRating';
import TextInput from '../TextInput/TextInput';

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

function FeelingsRating() {
	const [mood, setMood] = React.useState(undefined);
	const [comment, setComment] = React.useState('');

	return (
		<div className="flex flex-col">
			<div className="space-y-20">
				<section>
					<h2 className="w-full pb-2 text-4xl font-semibold">How are you feeling?</h2>
					<div className="flex justify-between max-w-sm">
						{feelings.map(({ icon, alt, description }) => {
							return (
								<MoodRating
									key={description}
									src={icon}
									alt={alt}
									description={description}
									mood={mood}
								/>
							);
						})}
					</div>
				</section>
				<section className="flex flex-col w-fit">
					<TextInput
						multiline
						required
						label="Write a sentence"
						type="text"
						className="flex border-2 resize-none"
						rows={5}
						cols={45}
						comment={comment}
						setComment={setComment}
					/>
					<div className="self-end">
						<Button>Submit</Button>
					</div>
				</section>
				{comment}
			</div>
		</div>
	);
}

export default FeelingsRating;
