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
			className={` ${className} px-8 py-2 mx-auto mt-10 text-2xl font-light border border-black rounded-lg hover:bg-gray-100`}
		>
			{children}
		</button>
	);
}

export default Button;
