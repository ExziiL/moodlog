import { useRouter } from 'next/navigation';
import * as React from 'react';

import { UserContext } from '@/contexts/UserProvider';
import { MoodOption } from '@/helpers/moodOptions';
import Button from '../Button/Button';
import MoodCollection from '../Mood/MoodCollection';
import TextareaInput from '../TextareaInput/TextareaInput';

function FeelingsRating() {
	const router = useRouter();

	const { user, handleSubmit } = React.useContext(UserContext);

	const [comment, setComment] = React.useState('');
	const [activeMood, setActiveMood] = React.useState<MoodOption>(user?.currentRating || MoodOption.NEUTRAL);
	const [isCommentValid, setIsCommentValid] = React.useState(false);

	React.useEffect(() => {
		if (comment.length > 120) {
			setIsCommentValid(true);
		} else {
			setIsCommentValid(false);
		}
	});

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
				<form>
					<TextareaInput
						multiline
						required
						label="What made your day special?"
						type="text"
						placeholder="Write something about your day..."
						className="flex flex-col w-full border-2 resize-none"
						rows={5}
						value={comment}
						setValue={setComment}
					/>
					{isCommentValid ? <div className="text-sm text-red-500 text-end">Bitte kürze deinen Text auf 120 Zeichen.</div> : <div className="text-sm text-end">{120 - comment.length} Zeichen übrig</div>}
				</form>
			</div>
			<div className="w-full mt-4">
				<Button
					className="w-full"
					onClick={() => {
						handleSubmit(activeMood, comment);
						setComment('');
						setActiveMood(MoodOption.NEUTRAL);
						router.push('/history');
					}}
				>
					Eintrag bestätigen
				</Button>
			</div>
		</div>
	);
}

export default FeelingsRating;
