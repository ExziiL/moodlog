import * as React from 'react';

type InputProps = React.ComponentProps<'input'>;

const COMPONENTS = {
	text: (props) => {
		return (
			<input
				{...props}
				type="text"
			/>
		);
	},
	number: (props) => {
		return (
			<input
				{...props}
				type="number"
			/>
		);
	},
	email: (props) => {
		return (
			<input
				{...props}
				type="email"
			/>
		);
	},
	password: (props) => {
		return (
			<input
				{...props}
				type="password"
			/>
		);
	},
} satisfies Record<string, React.FC<InputProps>>;

type Input = keyof typeof COMPONENTS;

const Input = (props: { type: Input } & InputProps) => {
	const Component = COMPONENTS[props.type];
	return (
		<Component
			className="w-full max-w-sm px-2 py-1 border-2 resize-none"
			{...props}
		/>
	);
};

export default Input;
