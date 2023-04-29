import React from 'react';

interface TextInputProps {
	id?: string;
	multiline?: boolean;
	label: string;
	[key: string]: any;
}

function TextInput({ id, multiline, label, ...delegated }: TextInputProps) {
	const generatedId = React.useId();
	const appliedId = id || generatedId;

	return (
		<div className="text-input">
			<label htmlFor={appliedId}>{label}</label>
			{!multiline ? (
				<input
					id={appliedId}
					{...delegated}
				/>
			) : (
				<textarea
					id={appliedId}
					{...delegated}
				/>
			)}
		</div>
	);
}

export default TextInput;
