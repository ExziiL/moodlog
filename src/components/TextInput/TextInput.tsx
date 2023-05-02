import React from 'react';

interface TextInputProps {
	id?: string;
	multiline?: boolean;
	label: string;
	comment: string;
	setComment: (comment: string) => void;
	[key: string]: any;
}

function TextInput({ id, multiline, label, comment, setComment, ...delegated }: TextInputProps) {
	const generatedId = React.useId();
	const appliedId = id || generatedId;

	const Tag = typeof multiline !== 'undefined' ? 'textarea' : 'input';

	return (
		<>
			<form>
				<label htmlFor={appliedId}>{label}</label>
				<Tag
					{...delegated}
					id={appliedId}
					value={comment}
					onChange={(event) => {
						setComment(event.target.value);
					}}
				/>
			</form>
		</>
	);
}

export default TextInput;
