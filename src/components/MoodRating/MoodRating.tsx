import Image from 'next/image';
import React from 'react';

interface MoodRatingProps {
	src: string;
	alt: string;
	text: string;
	hideText?: boolean;
}

function MoodRating({ src, alt, text, hideText }: MoodRatingProps) {
	return (
		<div className="flex flex-col items-center">
			<Image
				src={src}
				alt={alt}
			/>
			{!hideText && <div className="text-sm">{text}</div>}
		</div>
	);
}

export default MoodRating;
