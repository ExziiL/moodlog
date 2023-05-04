import * as React from 'react';

import awesomeIcon from '@/assets/svgs/awesome.svg';
import awfulIcon from '@/assets/svgs/awful.svg';
import badIcon from '@/assets/svgs/bad.svg';
import goodIcon from '@/assets/svgs/good.svg';
import neutralIcon from '@/assets/svgs/neutral.svg';
import { UserContext } from '@/contexts/UserProvider';
import { Mood } from '@/helpers/moodOptions';
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
	const { user, setUser } = React.useContext(UserContext);

	const [comment, setComment] = React.useState('');
	const [activeMood, setActiveMood] = React.useState<Mood>(user.currentRating);

	const handleSubmit = () => {
		setUser((prevUser) => ({
			...prevUser,
			currentRating: activeMood,
			currentComment: comment,
		}));
	};

	return (
		<div className="flex flex-col max-w-sm">
			<div className="space-y-10">
				<section>
					<h2 className="w-full pb-2 text-4xl font-semibold">How are you feeling?</h2>
					<div className="flex justify-between max-w-sm">
						{feelings.map(({ icon, alt, description }) => {
							const selectedMoodStyling = activeMood === description.toLowerCase() ? 'border-2 rounded-md bg-gray-50 shadow-sm' : '';
							return (
								<MoodRating
									key={description}
									src={icon}
									alt={alt}
									description={description}
									className={selectedMoodStyling}
									onClick={() => {
										setActiveMood(description.toLowerCase() as Mood);
									}}
								/>
							);
						})}
					</div>
				</section>
				<section className="flex flex-col w-full ">
					<TextInput
						multiline
						required
						label="Write a sentence"
						type="text"
						className="flex w-full border-2 resize-none"
						rows={5}
						// cols={39}
						comment={comment}
						setComment={setComment}
					/>
				</section>
			</div>
			<div className="self-end">
				<Button onClick={handleSubmit}>Submit</Button>
			</div>

			{/* Nebeninformationen, spaeter */}
			<div className="pt-8 space-y-4">
				<div>{activeMood}</div>
				<div>{comment}</div>
			</div>
		</div>
	);
}

export default FeelingsRating;
