import React from 'react';

interface TextInputProps {
	id?: string;
	multiline?: boolean;
	label: string;
	value: string;
	// setValue: (comment: string) => void;
	[key: string]: any;
}

function TextInput({ id, multiline, label, value, setValue, ...delegated }: TextInputProps) {
	const generatedId = React.useId();
	const appliedId = id || generatedId;

	const Tag = typeof multiline !== 'undefined' ? 'textarea' : 'input';

	return (
		<>
			<label htmlFor={appliedId}>{label}</label>
			<Tag
				{...delegated}
				id={appliedId}
				value={value}
				onChange={(event) => {
					setValue(event.target.value);
				}}
				className="flex flex-col w-full max-w-sm border-2 resize-none"
			/>
		</>
	);
}

export default TextInput;
