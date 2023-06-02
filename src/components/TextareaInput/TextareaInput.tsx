import React from 'react';

interface TextareaInputProps {
	id?: string;
	multiline?: boolean;
	label: string;
	value: string;
	// setValue: (comment: string) => void;
	[key: string]: any;
}

function TextareaInput({ id, multiline, label, value, setValue, ...delegated }: TextareaInputProps) {
	const generatedId = React.useId();
	const appliedId = id || generatedId;

	return (
		<>
			<label htmlFor={appliedId}>{label}</label>
			<textarea
				{...delegated}
				id={appliedId}
				value={value}
				onChange={(event) => {
					setValue(event.target.value);
				}}
				className="flex flex-col w-full max-w-sm px-2 py-1 border-2 resize-none"
			/>
		</>
	);
}

export default TextareaInput;
