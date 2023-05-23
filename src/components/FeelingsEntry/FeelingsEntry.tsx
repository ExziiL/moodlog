import * as React from 'react';

import { UserContext } from '@/contexts/UserProvider';
import { MoodOption } from '@/helpers/moodOptions';
import Button from '../Button/Button';
import MoodCollection from '../Mood/MoodCollection';
import TextInput from '../TextInput/TextInput';

function FeelingsRating() {
	const { user, handleSubmit } = React.useContext(UserContext);

	const [comment, setComment] = React.useState('');
	const [activeMood, setActiveMood] = React.useState<MoodOption>(user.currentRating);

	return (
		<div className="flex flex-col max-w-sm">
			<div className="space-y-10">
				<div>
					<h2 className="w-full pb-2 text-xl font-semibold">How are you feeling?</h2>
					<MoodCollection
						activeMood={activeMood}
						setActiveMood={setActiveMood}
					/>
				</div>
				<TextInput
					multiline
					required
					label="What made your day special?"
					type="text"
					placeholder="Write something about your day..."
					className="flex flex-col w-full border-2 resize-none"
					rows={5}
					comment={comment}
					setComment={setComment}
				/>
			</div>
			<div className="w-full mt-4">
				<Button
					className="w-full"
					onClick={() => {
						handleSubmit(activeMood, comment);
						setComment('');
						setActiveMood(MoodOption.NEUTRAL);
					}}
				>
					Eintrag bestätigen
				</Button>
			</div>
		</div>
	);
}

export default FeelingsRating;
