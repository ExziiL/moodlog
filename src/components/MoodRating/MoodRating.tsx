import Image from 'next/image';
import React from 'react';

interface MoodRatingProps {
	className?: string;
	src: string;
	alt: string;
	description: string;
	hideText?: boolean;
	[key: string]: any;
}

function MoodRating({ src, alt, description, hideText, className, ...delegated }: MoodRatingProps) {
	return (
		<div
			className={`flex flex-col items-center w-16 p-2 ${className}`}
			{...delegated}
		>
			<Image
				src={src}
				alt={alt}
			/>
			{!hideText && <div className="text-sm">{description}</div>}
		</div>
	);
}

export default MoodRating;
