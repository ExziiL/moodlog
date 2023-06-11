import * as React from 'react';

interface ButtonProps {
	children: React.ReactNode;
	disabled?: boolean;
	className?: string;
	[key: string]: any;
}

function Button({ children, disabled, className, ...delegated }: ButtonProps) {
	return (
		<button
			{...delegated}
			disabled={disabled}
			className={`${className} btn`}
		>
			{children}
		</button>
	);
}

export default Button;
